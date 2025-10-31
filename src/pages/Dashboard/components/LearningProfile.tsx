import { Card } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Progress } from "../../../components/ui/progress";
import { User, Brain, Clock, Target, Eye, BookOpen, Users, Zap, TrendingUp, Award, Lightbulb } from "lucide-react";

export function LearningProfile() {
  const profileData = {
    vark: "Visual",
    bestTime: "Manhã (6h - 12h)",
    studyStyle: "Individual",
    focusTime: "2-3 horas",
    pace: "Rápido e direto",
    intelligences: [
      { name: "Lógico-Matemática", value: 85, color: "from-blue-500 to-blue-600" },
      { name: "Linguística", value: 72, color: "from-purple-500 to-purple-600" },
      { name: "Visual-Espacial", value: 90, color: "from-teal-500 to-cyan-600" },
    ],
    strengths: [
      { icon: Eye, label: "Memória Visual", description: "Aprende melhor com diagramas" },
      { icon: Zap, label: "Raciocínio Rápido", description: "Absorção ágil de conteúdo" },
      { icon: Target, label: "Foco Intenso", description: "Alta concentração em curto prazo" },
    ],
    recommendations: [
      { icon: BookOpen, text: "Use mapas mentais coloridos para organizar ideias" },
      { icon: Clock, text: "Estude conceitos complexos entre 8h-11h da manhã" },
      { icon: Brain, text: "Faça pausas de 10min a cada 45min de estudo" },
    ]
  };

  return (
    <div className="space-y-6">
      {/* Card Principal */}
      <Card className="bg-slate-800/70 backdrop-blur-xl border-2 border-slate-700 shadow-2xl p-6 overflow-hidden relative">
        {/* Background decorativo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 p-3 rounded-2xl shadow-xl">
                <User className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-white mb-1">Seu Perfil de Aprendizagem</h2>
              <p className="text-sm text-slate-400">Baseado em princípios neurocientíficos e personalizado para você</p>
            </div>
          </div>

          {/* Grid de Características Principais */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-teal-500/30 rounded-xl p-4">
              <Eye className="w-8 h-8 text-teal-400 mb-2" />
              <h3 className="text-xs text-slate-400 mb-1">Estilo VARK</h3>
              <p className="text-white">{profileData.vark}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4">
              <Clock className="w-8 h-8 text-blue-400 mb-2" />
              <h3 className="text-xs text-slate-400 mb-1">Melhor Período</h3>
              <p className="text-white">{profileData.bestTime}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4">
              <Users className="w-8 h-8 text-purple-400 mb-2" />
              <h3 className="text-xs text-slate-400 mb-1">Preferência</h3>
              <p className="text-white">{profileData.studyStyle}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/30 rounded-xl p-4">
              <Zap className="w-8 h-8 text-orange-400 mb-2" />
              <h3 className="text-xs text-slate-400 mb-1">Ritmo</h3>
              <p className="text-white">{profileData.pace}</p>
            </div>
          </div>

          {/* Inteligências Múltiplas */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-teal-400" />
              <h3 className="text-lg text-white">Inteligências Múltiplas</h3>
            </div>
            <div className="space-y-4">
              {profileData.intelligences.map((intelligence, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">{intelligence.name}</span>
                    <Badge variant="outline" className="bg-slate-700/50 text-white border-slate-600">
                      {intelligence.value}%
                    </Badge>
                  </div>
                  <div className="relative">
                    <Progress value={intelligence.value} className="h-2 bg-slate-700" />
                    <div 
                      className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${intelligence.color} rounded-full transition-all`}
                      style={{ width: `${intelligence.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pontos Fortes */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg text-white">Seus Pontos Fortes</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {profileData.strengths.map((strength, i) => (
                <div key={i} className="bg-slate-700/30 backdrop-blur-sm border border-slate-600 rounded-xl p-4 hover:border-teal-500/50 transition-all">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-2 rounded-lg w-fit mb-2">
                    <strength.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-white mb-1">{strength.label}</h4>
                  <p className="text-xs text-slate-400">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recomendações Personalizadas */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-emerald-400" />
              <h3 className="text-white">Recomendações Personalizadas</h3>
            </div>
            <div className="space-y-3">
              {profileData.recommendations.map((rec, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-emerald-500/20 p-2 rounded-lg flex-shrink-0">
                    <rec.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-sm text-slate-300 pt-1">{rec.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Card de Progresso */}
      <Card className="bg-gradient-to-br from-teal-500 to-cyan-600 border-2 border-teal-400 shadow-2xl p-6">
        <div className="flex items-center justify-between text-white">
          <div>
            <p className="text-sm text-teal-100 mb-1">Compatibilidade do Perfil</p>
            <h3 className="text-3xl mb-2">92%</h3>
            <p className="text-xs text-teal-100">Excelente alinhamento com métodos neurocientíficos</p>
          </div>
          <div className="bg-white/20 p-4 rounded-2xl">
            <TrendingUp className="w-12 h-12 text-white" />
          </div>
        </div>
      </Card>
    </div>
  );
}
