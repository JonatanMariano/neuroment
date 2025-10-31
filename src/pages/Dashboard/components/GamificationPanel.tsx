import { Card } from "../../../components/ui/card";
import { Progress } from "../../../components/ui/progress";
import { Badge } from "../../../components/ui/badge";
import { Trophy, Star, Flame, Target, Award, TrendingUp, Zap, Crown, Medal } from "lucide-react";

export function GamificationPanel() {
  const userLevel = 12;
  const currentXP = 350;
  const nextLevelXP = 500;
  const xpProgress = (currentXP / nextLevelXP) * 100;

  const streak = 7;
  
  const weeklyGoals = [
    { label: "Estudar 10h", current: 7, total: 10, icon: Target },
    { label: "5 dias seguidos", current: 5, total: 5, icon: Flame },
    { label: "Completar 15 sessões", current: 12, total: 15, icon: Zap },
  ];

  const badges = [
    { emoji: "🏆", name: "Iniciante", unlocked: true, color: "from-yellow-500 to-orange-600" },
    { emoji: "⭐", name: "Dedicado", unlocked: true, color: "from-yellow-400 to-yellow-500" },
    { emoji: "🎯", name: "Focado", unlocked: true, color: "from-pink-500 to-pink-600" },
    { emoji: "🚀", name: "Veloz", unlocked: true, color: "from-blue-500 to-blue-600" },
    { emoji: "💎", name: "Consistente", unlocked: false, color: "from-cyan-500 to-cyan-600" },
    { emoji: "👑", name: "Mestre", unlocked: false, color: "from-purple-500 to-purple-600" },
  ];

  const ranking = [
    { pos: 1, name: "Você", points: 1850, isUser: true, avatar: "👤" },
    { pos: 2, name: "João S.", points: 1720, avatar: "👨" },
    { pos: 3, name: "Maria L.", points: 1680, avatar: "👩" },
  ];

  return (
    <div className="space-y-4">
      {/* Card de Nível */}
      <Card className="bg-gradient-to-br from-teal-500 to-cyan-600 border-2 border-teal-400 shadow-2xl p-6 overflow-hidden relative">
        {/* Efeito de brilho */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
        
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-teal-100 mb-1">Seu Nível</p>
              <h3 className="text-4xl text-white">{userLevel}</h3>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
              <Trophy className="w-10 h-10 text-yellow-300" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Progress value={xpProgress} className="h-3 bg-white/20" />
            <div className="flex items-center justify-between text-xs text-teal-100">
              <span>{currentXP} XP</span>
              <span>{nextLevelXP} XP</span>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-yellow-300" />
            <p className="text-xs text-white">Faltam {nextLevelXP - currentXP} XP para o próximo nível!</p>
          </div>
        </div>
      </Card>

      {/* Card de Sequência */}
      <Card className="bg-slate-800/70 backdrop-blur-xl border-2 border-slate-700 shadow-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-lg">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white">Sequência</h3>
          </div>
          
          <div className="text-center py-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative text-6xl mb-2">🔥</div>
            </div>
            <h4 className="text-4xl text-white mb-1">{streak}</h4>
            <p className="text-sm text-slate-400">dias consecutivos</p>
          </div>

          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-3 text-center">
            <p className="text-xs text-slate-300">Continue assim para desbloquear o badge <strong className="text-orange-400">Chama Eterna 🌟</strong></p>
          </div>
        </div>
      </Card>

      {/* Card de Badges */}
      <Card className="bg-slate-800/70 backdrop-blur-xl border-2 border-slate-700 shadow-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-2 rounded-lg">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white">Badges</h3>
          </div>
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
            {badges.filter(b => b.unlocked).length}/{badges.length}
          </Badge>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge, i) => (
            <div 
              key={i} 
              className={`relative group ${
                badge.unlocked 
                  ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/30' 
                  : 'bg-slate-700/30 border-2 border-slate-600'
              } p-4 rounded-xl text-center transition-all hover:scale-105 cursor-pointer`}
            >
              {badge.unlocked && (
                <div className="absolute -top-1 -right-1">
                  <div className="bg-green-500 rounded-full p-1">
                    <Medal className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
              <div className={`text-3xl mb-1 ${!badge.unlocked && 'grayscale opacity-30'}`}>
                {badge.emoji}
              </div>
              <p className={`text-xs ${badge.unlocked ? 'text-yellow-400' : 'text-slate-500'}`}>
                {badge.name}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Card de Metas Semanais */}
      <Card className="bg-slate-800/70 backdrop-blur-xl border-2 border-slate-700 shadow-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-2 rounded-lg">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-white">Metas Semanais</h3>
        </div>
        
        <div className="space-y-4">
          {weeklyGoals.map((goal, i) => {
            const progress = (goal.current / goal.total) * 100;
            const isComplete = goal.current >= goal.total;
            
            return (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <goal.icon className={`w-4 h-4 ${isComplete ? 'text-green-400' : 'text-slate-400'}`} />
                    <span className="text-sm text-slate-300">{goal.label}</span>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      isComplete 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-slate-700/50 text-slate-400 border-slate-600'
                    }`}
                  >
                    {goal.current}/{goal.total}
                  </Badge>
                </div>
                <div className="relative">
                  <Progress value={progress} className="h-2 bg-slate-700" />
                  <div 
                    className={`absolute top-0 left-0 h-2 rounded-full transition-all ${
                      isComplete 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                        : 'bg-gradient-to-r from-teal-500 to-cyan-600'
                    }`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Card de Ranking */}
      <Card className="bg-slate-800/70 backdrop-blur-xl border-2 border-slate-700 shadow-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-2 rounded-lg">
            <Star className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-white">Ranking Semanal</h3>
        </div>
        
        <div className="space-y-2">
          {ranking.map((user) => (
            <div 
              key={user.pos} 
              className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                user.isUser 
                  ? 'bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border-2 border-teal-500/50' 
                  : 'bg-slate-700/30 border-2 border-slate-600 hover:border-slate-500'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                  user.pos === 1 ? 'bg-gradient-to-br from-yellow-500 to-orange-600' :
                  user.pos === 2 ? 'bg-gradient-to-br from-slate-400 to-slate-500' :
                  'bg-gradient-to-br from-orange-600 to-orange-700'
                }`}>
                  {user.pos === 1 && <Crown className="w-4 h-4 text-white" />}
                  {user.pos !== 1 && <span className="text-white text-sm">#{user.pos}</span>}
                </div>
                <div className="text-2xl">{user.avatar}</div>
                <span className={`text-sm ${user.isUser ? 'text-white' : 'text-slate-300'}`}>
                  {user.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-teal-500/20 text-teal-400 border-teal-500/30">
                  {user.points} pts
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-slate-400">Estude mais 130 pontos para alcançar o 1º lugar! 🏆</p>
        </div>
      </Card>
    </div>
  );
}