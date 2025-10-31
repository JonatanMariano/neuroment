import { Card } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Award, CheckCircle } from "lucide-react";

interface Achievement {
  emoji: string;
  name: string;
  unlocked: boolean;
  description: string;
  color: string;
}

export function AchievementsPanel() {
  const achievements: Achievement[] = [
    { 
      emoji: "🏆", 
      name: "Iniciante", 
      unlocked: true,
      description: "Complete seu primeiro estudo",
      color: "from-yellow-500 to-orange-600"
    },
    { 
      emoji: "⭐", 
      name: "Dedicado", 
      unlocked: true,
      description: "Estude 5 dias consecutivos",
      color: "from-yellow-400 to-yellow-500"
    },
    { 
      emoji: "🎯", 
      name: "Focado", 
      unlocked: true,
      description: "Complete 10 sessões de estudo",
      color: "from-pink-500 to-pink-600"
    },
    { 
      emoji: "🚀", 
      name: "Veloz", 
      unlocked: true,
      description: "Alcance nível 10",
      color: "from-blue-500 to-blue-600"
    },
    { 
      emoji: "💎", 
      name: "Consistente", 
      unlocked: false,
      description: "Estude 30 dias consecutivos",
      color: "from-cyan-500 to-cyan-600"
    },
    { 
      emoji: "👑", 
      name: "Mestre", 
      unlocked: false,
      description: "Alcance nível 50",
      color: "from-purple-500 to-purple-600"
    },
  ];

  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <Card className="bg-slate-800/70 backdrop-blur-xl border-2 border-slate-700 shadow-2xl p-6 overflow-hidden relative">
      {/* Background decorativo */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-yellow-500 to-orange-600 p-3 rounded-2xl shadow-xl">
                <Award className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-white mb-1">Conquistas</h2>
              <p className="text-sm text-slate-400">Desbloqueie novas conquistas estudando</p>
            </div>
          </div>
          <Badge 
            variant="outline" 
            className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-lg px-4 py-2"
          >
            {unlockedCount}/{achievements.length}
          </Badge>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-500 to-orange-600 transition-all duration-500"
              style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-slate-400 mt-2 text-center">
            {Math.round((unlockedCount / achievements.length) * 100)}% completo
          </p>
        </div>

        {/* Grid de Conquistas */}
        <div className="grid grid-cols-3 gap-4">
          {achievements.map((achievement, i) => (
            <div 
              key={i} 
              className={`relative group transition-all duration-300 hover:scale-105 cursor-pointer ${
                achievement.unlocked 
                  ? '' 
                  : 'opacity-60'
              }`}
            >
              {/* Card da Conquista */}
              <div
                className={`relative overflow-hidden rounded-2xl border-3 ${
                  achievement.unlocked
                    ? `bg-gradient-to-br ${achievement.color} border-yellow-400/50 shadow-lg`
                    : 'bg-slate-700/50 border-slate-600'
                } p-5 text-center transition-all`}
              >
                {/* Badge de Desbloqueado */}
                {achievement.unlocked && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="bg-green-500 rounded-full p-1.5 shadow-lg border-2 border-white">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}

                {/* Emoji/Icon */}
                <div className={`text-5xl mb-3 transition-all ${
                  !achievement.unlocked && 'grayscale'
                }`}>
                  {achievement.emoji}
                </div>

                {/* Nome */}
                <h3 className={`text-sm mb-2 transition-all ${
                  achievement.unlocked 
                    ? 'text-white' 
                    : 'text-slate-400'
                }`}>
                  {achievement.name}
                </h3>

                {/* Glow effect quando desbloqueado */}
                {achievement.unlocked && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity`}></div>
                )}
              </div>

              {/* Tooltip com descrição no hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                <div className="bg-slate-900 border-2 border-slate-700 rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                  <p className="text-xs text-slate-300">{achievement.description}</p>
                  {!achievement.unlocked && (
                    <p className="text-xs text-yellow-400 mt-1">🔒 Bloqueado</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Próxima Conquista */}
        {unlockedCount < achievements.length && (
          <div className="mt-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <Award className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <h4 className="text-white mb-1">🎯 Próxima Conquista</h4>
                <p className="text-sm text-slate-300">
                  <strong className="text-yellow-400">{achievements.find(a => !a.unlocked)?.name}</strong>
                  {" - "}
                  {achievements.find(a => !a.unlocked)?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}