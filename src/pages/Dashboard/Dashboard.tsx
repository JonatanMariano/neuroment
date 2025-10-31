import { useAuth } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Progress } from "../../components/ui/progress";
import { 
  Brain, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  TrendingUp,
  Target,
  Flame,
  Trophy,
  Clock,
  ArrowRight,
  Zap,
  Star,
  Map,
  MessageCircle
} from "lucide-react";
import { StudySchedule } from "./components/StudySchedule";
import { MindMapUpload } from "./components/MindMapUpload";
import { LearningProfile } from "./components/LearningProfile";
import { GamificationPanel } from "./components/GamificationPanel";
import { AchievementsPanel } from "./components/AchievementsPanel";
import { useState } from "react";

export default function Dashboard() {
  const { displayName, logout } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<"cronograma" | "mapas" | "perfil" | "conquistas">("cronograma");

  const quickActions = [
    {
      icon: MessageCircle,
      title: "Assistente IA",
      description: "Chat inteligente",
      color: "from-teal-500 to-cyan-600",
      onClick: () => navigate("/chat"),
    },
    {
      icon: Calendar,
      title: "Cronograma",
      description: "Planejar estudos",
      color: "from-blue-500 to-indigo-600",
      onClick: () => setActiveSection("cronograma"),
    },
    {
      icon: Map,
      title: "Mapas Mentais",
      description: "Organizar ideias",
      color: "from-purple-500 to-pink-600",
      onClick: () => setActiveSection("mapas"),
    },
    {
      icon: Trophy,
      title: "Conquistas",
      description: "Ver progressos",
      color: "from-amber-500 to-orange-600",
      onClick: () => setActiveSection("conquistas"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <Header userName={displayName} onLogout={logout} />

      <main className="relative container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
            <div className="w-full sm:w-auto">
              <h1 className="text-2xl sm:text-3xl text-white mb-1 sm:mb-2">
                Olá, {displayName}! 👋
              </h1>
              <p className="text-sm sm:text-base text-slate-300">
                Continue sua jornada de aprendizado personalizado
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 rounded-xl px-4 py-3 flex-shrink-0">
              <Clock className="w-5 h-5 text-teal-400" />
              <div className="text-right">
                <div className="text-xs text-slate-400">Hoje</div>
                <div className="text-sm text-white whitespace-nowrap">{new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
              </div>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
            {quickActions.map((action, i) => (
              <button
                key={i}
                onClick={action.onClick}
                className="group relative bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-teal-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 text-left overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <div className="relative">
                  <div className={`bg-gradient-to-br ${action.color} p-2 sm:p-3 rounded-lg sm:rounded-xl mb-3 sm:mb-4 w-fit group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-white mb-0.5 sm:mb-1 text-sm sm:text-base">{action.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400">{action.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Navigation Pills */}
            <div className="flex gap-1 sm:gap-2 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 rounded-xl sm:rounded-2xl p-1 sm:p-2 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveSection("cronograma")}
                className={`flex-shrink-0 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all whitespace-nowrap text-xs sm:text-base ${
                  activeSection === "cronograma"
                    ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-700/50"
                }`}
              >
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                Cronograma
              </button>
              <button
                onClick={() => setActiveSection("mapas")}
                className={`flex-shrink-0 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all whitespace-nowrap text-xs sm:text-base ${
                  activeSection === "mapas"
                    ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-700/50"
                }`}
              >
                <Map className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                Mapas Mentais
              </button>
              <button
                onClick={() => setActiveSection("conquistas")}
                className={`flex-shrink-0 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all whitespace-nowrap text-xs sm:text-base ${
                  activeSection === "conquistas"
                    ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-700/50"
                }`}
              >
                <Trophy className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                Conquistas
              </button>
            </div>

            {/* Content Area */}
            {activeSection === "cronograma" && <StudySchedule />}
            {activeSection === "mapas" && <MindMapUpload />}
            {activeSection === "conquistas" && <AchievementsPanel />}
          </div>

          {/* Sidebar - Gamification */}
          <div className="lg:col-span-1">
            <GamificationPanel />
          </div>
        </div>
      </main>
    </div>
  );
}