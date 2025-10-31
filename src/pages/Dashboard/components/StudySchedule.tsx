import { useState } from "react";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Calendar, Clock, Plus, BookOpen, Edit2, Trash2, CheckCircle2, Brain, Zap } from "lucide-react";

interface Session {
  id: number;
  time: string;
  subject: string;
  duration: string;
  color: string;
  icon: string;
  completed: boolean;
  energy: "high" | "medium" | "low";
}

export function StudySchedule() {
  const [sessions, setSessions] = useState<Session[]>([
    { 
      id: 1,
      time: "09:00", 
      subject: "Matemática", 
      duration: "2h", 
      color: "from-blue-500 to-blue-600",
      icon: "📐",
      completed: false,
      energy: "high"
    },
    { 
      id: 2,
      time: "14:00", 
      subject: "Português", 
      duration: "1h30", 
      color: "from-purple-500 to-purple-600",
      icon: "📖",
      completed: false,
      energy: "medium"
    },
    { 
      id: 3,
      time: "16:00", 
      subject: "História", 
      duration: "1h", 
      color: "from-emerald-500 to-emerald-600",
      icon: "🏛️",
      completed: true,
      energy: "medium"
    },
  ]);

  const toggleComplete = (id: number) => {
    setSessions(sessions.map(s => 
      s.id === id ? { ...s, completed: !s.completed } : s
    ));
  };

  const getEnergyBadge = (energy: "high" | "medium" | "low") => {
    const badges = {
      high: { icon: Zap, text: "Alta", class: "bg-green-500/20 text-green-400 border-green-500/30" },
      medium: { icon: Brain, text: "Média", class: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
      low: { icon: Clock, text: "Baixa", class: "bg-orange-500/20 text-orange-400 border-orange-500/30" }
    };
    const badge = badges[energy];
    return (
      <Badge variant="outline" className={`${badge.class} text-[10px] sm:text-xs px-1.5 py-0.5 whitespace-nowrap`}>
        <badge.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
        {badge.text}
      </Badge>
    );
  };

  return (
    <Card className="bg-slate-800/70 backdrop-blur-xl border-2 border-slate-700 shadow-2xl p-3 sm:p-6 overflow-hidden relative">
      {/* Background decorativo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <div className="relative group flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl sm:rounded-2xl blur-md sm:blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl">
                <Calendar className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg sm:text-2xl text-white mb-0.5 sm:mb-1 truncate">Cronograma de Estudos</h2>
              <p className="text-[10px] sm:text-sm text-slate-400 line-clamp-1">
                Adaptado ao seu ritmo biológico - {new Date().toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' })}
              </p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-sm sm:text-base flex-shrink-0">
            <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="whitespace-nowrap">Nova Sessão</span>
          </Button>
        </div>

        {/* Stats rápidos */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg sm:rounded-xl p-2 sm:p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-0.5 sm:gap-2 mb-1">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
              <span className="text-[9px] sm:text-xs text-slate-400 whitespace-nowrap">Total Hoje</span>
            </div>
            <p className="text-base sm:text-2xl text-white">4h30</p>
          </div>
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg sm:rounded-xl p-2 sm:p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-0.5 sm:gap-2 mb-1">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
              <span className="text-[9px] sm:text-xs text-slate-400 whitespace-nowrap">Completas</span>
            </div>
            <p className="text-base sm:text-2xl text-white">1/3</p>
          </div>
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg sm:rounded-xl p-2 sm:p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-0.5 sm:gap-2 mb-1">
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-[9px] sm:text-xs text-slate-400 whitespace-nowrap">Matérias</span>
            </div>
            <p className="text-base sm:text-2xl text-white">3</p>
          </div>
        </div>

        {/* Sessões de estudo */}
        <div className="space-y-2 sm:space-y-3">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`group relative bg-slate-700/30 backdrop-blur-sm border-2 rounded-xl sm:rounded-2xl p-3 sm:p-5 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] ${
                session.completed 
                  ? 'border-green-500/50 bg-green-500/5' 
                  : 'border-slate-600 hover:border-teal-500/50'
              }`}
            >
              {/* Gradient overlay quando hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${session.color} opacity-0 group-hover:opacity-5 rounded-xl sm:rounded-2xl transition-opacity`}></div>
              
              <div className="relative flex items-center gap-2 sm:gap-4">
                {/* Checkbox */}
                <button
                  onClick={() => toggleComplete(session.id)}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                    session.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-slate-500 hover:border-teal-500'
                  }`}
                >
                  {session.completed && <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                </button>

                {/* Icon da matéria */}
                <div className={`bg-gradient-to-br ${session.color} p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg text-lg sm:text-2xl flex-shrink-0`}>
                  {session.icon}
                </div>

                {/* Info da sessão */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-3 mb-1 sm:mb-2">
                    <h3 className={`text-sm sm:text-lg truncate ${session.completed ? 'text-slate-400 line-through' : 'text-white'}`}>
                      {session.subject}
                    </h3>
                    <div className="flex-shrink-0">
                      {getEnergyBadge(session.energy)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{session.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Ações - apenas desktop */}
                <div className="hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="text-slate-400 hover:text-teal-400 hover:bg-slate-600"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="text-slate-400 hover:text-red-400 hover:bg-slate-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dica neurocientífica */}
        <div className="mt-4 sm:mt-6 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="bg-teal-500/20 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
            </div>
            <div className="min-w-0">
              <h4 className="text-white mb-1 text-sm sm:text-base">💡 Dica Neurocientífica</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Seu melhor horário para aprender conteúdos complexos é pela <strong>manhã</strong>, quando sua capacidade cognitiva está no pico. Reserve a tarde para revisões e exercícios práticos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}