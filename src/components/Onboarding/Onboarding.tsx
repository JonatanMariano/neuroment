import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Progress } from "../ui/progress";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";
import { 
  Brain, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Clock, 
  Target, 
  CheckCircle2, 
  TrendingUp,
  Award,
  Zap,
  Star,
  Trophy,
  Flame
} from "lucide-react";
import type { OnboardingData } from "../../types";

interface OnboardingProps {
  onComplete: (data: OnboardingData) => void;
}

interface QuestionnaireData {
  studyPeriod: string;
  focusTime: string;
  studyAlone: string;
  bestTechnique: string;
  varkPreference: string;
  topIntelligences: string[];
  mainMotivation: string;
  mainChallenge: string;
  conditions: string[];
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [data, setData] = useState<QuestionnaireData>({
    studyPeriod: "",
    focusTime: "",
    studyAlone: "",
    bestTechnique: "",
    varkPreference: "",
    topIntelligences: [],
    mainMotivation: "",
    mainChallenge: "",
    conditions: [],
  });

  const sections = [
    { 
      title: "Seu Ritmo de Estudo", 
      subtitle: "Vamos descobrir quando e como você aprende melhor",
      icon: Clock,
      color: "teal"
    },
    { 
      title: "Suas Habilidades Naturais", 
      subtitle: "Identifique seus superpoderes de aprendizagem",
      icon: Brain,
      color: "purple"
    },
    { 
      title: "Seus Objetivos e Desafios", 
      subtitle: "Personalize sua jornada de aprendizado",
      icon: Target,
      color: "cyan"
    },
  ];

  const totalSections = sections.length;
  const progress = ((currentSection + 1) / totalSections) * 100;

  // Insights dinâmicos
  const insights = [
    { icon: "🧠", text: "Estudantes que conhecem seu perfil têm 2.5x mais sucesso" },
    { icon: "⚡", text: "Respeitar seu ritmo biológico aumenta retenção em 40%" },
    { icon: "🎯", text: "Técnicas personalizadas dobram a eficiência dos estudos" },
    { icon: "✨", text: "Identificar habilidades naturais acelera o aprendizado" },
    { icon: "🚀", text: "Metas claras aumentam motivação em 3x" },
  ];
  
  const [currentInsight, setCurrentInsight] = useState(insights[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight(insights[Math.floor(Math.random() * insights.length)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Calcular perguntas respondidas
  const getAnsweredCount = () => {
    let count = 0;
    if (data.studyPeriod) count++;
    if (data.focusTime) count++;
    if (data.studyAlone) count++;
    if (data.bestTechnique) count++;
    if (data.varkPreference) count++;
    if (data.topIntelligences.length > 0) count++;
    if (data.mainMotivation) count++;
    if (data.mainChallenge) count++;
    return count;
  };

  // Verificar se seção está completa
  const isSectionComplete = () => {
    if (currentSection === 0) {
      return data.studyPeriod && data.focusTime && data.studyAlone && data.bestTechnique;
    }
    if (currentSection === 1) {
      return data.varkPreference && data.topIntelligences.length > 0;
    }
    if (currentSection === 2) {
      return data.mainMotivation && data.mainChallenge;
    }
    return false;
  };

  const totalQuestions = 8;
  const answeredQuestions = getAnsweredCount();
  const completionPercentage = (answeredQuestions / totalQuestions) * 100;

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [currentSection]);

  const handleNext = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const onboardingData: OnboardingData = {
        bestStudyPeriod: data.studyPeriod === "Manhã" ? "morning" : 
                        data.studyPeriod === "Tarde" ? "afternoon" : 
                        data.studyPeriod === "Noite" ? "night" : "morning",
        studyPreference: data.studyAlone === "Sozinho" ? "solo" : 
                        data.studyAlone === "Em grupo" ? "group" : "both",
        varkPrimary: data.varkPreference === "Visual" ? "visual" :
                    data.varkPreference === "Auditivo" ? "auditory" :
                    data.varkPreference === "Leitura/Escrita" ? "reading" : "kinesthetic",
        multipleIntelligences: data.topIntelligences,
        challenges: data.conditions,
        goals: [data.mainMotivation],
        availableHoursPerDay: 2,
      };
      onComplete(onboardingData);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleArrayValue = (array: string[], value: string, max: number = 999) => {
    if (array.includes(value)) {
      return array.filter(v => v !== value);
    }
    if (array.length >= max) {
      return array;
    }
    return [...array, value];
  };

  const OptionCard = ({ 
    label, 
    description, 
    selected, 
    onClick 
  }: { 
    label: string; 
    description?: string;
    selected: boolean; 
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`group relative p-6 rounded-2xl text-left transition-all duration-300 overflow-hidden ${
        selected
          ? "bg-gradient-to-br from-teal-500 to-cyan-600 shadow-2xl shadow-teal-500/30 scale-[1.02]"
          : "bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 hover:border-teal-400 hover:shadow-lg hover:scale-[1.01]"
      }`}
    >
      {/* Efeito shimmer ao hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          <h4 className={`mb-1 transition-colors ${selected ? "text-white" : "text-slate-100"}`}>
            {label}
          </h4>
          {description && (
            <p className={`text-sm transition-colors ${selected ? "text-teal-50" : "text-slate-400"}`}>
              {description}
            </p>
          )}
        </div>
        <div className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
          selected 
            ? "bg-white scale-110" 
            : "border-2 border-slate-600 group-hover:border-teal-500 group-hover:scale-110"
        }`}>
          {selected && <CheckCircle2 className="w-5 h-5 text-teal-600" />}
        </div>
      </div>
    </button>
  );

  const IntelligenceCard = ({ 
    label, 
    icon, 
    selected, 
    onClick,
    disabled
  }: { 
    label: string; 
    icon: string;
    selected: boolean; 
    onClick: () => void;
    disabled?: boolean;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative p-5 rounded-xl text-center transition-all duration-300 ${
        selected
          ? "bg-gradient-to-br from-teal-500 to-cyan-600 shadow-xl shadow-teal-500/30 scale-105"
          : disabled 
          ? "bg-slate-900/50 opacity-40 cursor-not-allowed border-2 border-slate-800"
          : "bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 hover:border-teal-400 hover:scale-102 hover:shadow-md"
      }`}
    >
      <div className={`text-3xl mb-2 transition-transform ${selected ? 'scale-110' : ''}`}>{icon}</div>
      <div className={`text-sm transition-colors ${selected ? "text-white" : "text-slate-300"}`}>
        {label}
      </div>
      {selected && (
        <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-xl animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-teal-600" />
        </div>
      )}
    </button>
  );

  const CurrentIcon = sections[currentSection].icon;
  const sectionComplete = isSectionComplete();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Efeitos de fundo sutis - igual ao login */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Barra de progresso fixa no topo */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-800/50 backdrop-blur-sm z-50 shadow-sm">
        <div 
          className="h-full bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 transition-all duration-700 ease-out relative overflow-hidden"
          style={{ width: `${completionPercentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="mb-8">
          {/* Logo e Título */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-4 rounded-2xl shadow-xl">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl text-white mb-1">Configure seu Perfil Personalizado</h1>
              <p className="text-slate-300">Apenas 3 etapas simples para transformar seus estudos</p>
            </div>
          </div>

          {/* Cards de Gamificação */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Card Progresso */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-2 rounded-lg">
                    <Flame className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm text-slate-300">Progresso</span>
                </div>
                <Badge className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white border-0 px-3 shadow-lg">
                  {Math.round(completionPercentage)}%
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">{answeredQuestions}/{totalQuestions} concluídas</span>
                  {answeredQuestions > 0 && (
                    <span className="text-teal-400 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      +{answeredQuestions}
                    </span>
                  )}
                </div>
                <Progress value={completionPercentage} className="h-2.5 bg-slate-700" />
              </div>
            </Card>

            {/* Card Seção Atual */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg animate-pulse">
                    <CurrentIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm text-slate-300">Etapa Atual</span>
                </div>
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 px-3 shadow-lg">
                  {currentSection + 1}/{totalSections}
                </Badge>
              </div>
              <div className="text-sm text-white">
                {sections[currentSection].title}
              </div>
              {sectionComplete && (
                <div className="mt-2 flex items-center gap-1 text-xs text-teal-400">
                  <CheckCircle2 className="w-3 h-3" />
                  Seção completa!
                </div>
              )}
            </Card>

            {/* Card Insight */}
            <Card className="bg-gradient-to-br from-amber-500 to-orange-600 border-0 p-5 shadow-xl text-white hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  <span className="text-sm">Dica Inteligente</span>
                </div>
                <p className="text-sm leading-relaxed">
                  {currentInsight.icon} {currentInsight.text}
                </p>
              </div>
            </Card>
          </div>

          {/* Indicadores de Etapas - Melhorados */}
          <div className="flex items-center justify-center gap-2">
            {sections.map((section, idx) => {
              const SectionIcon = section.icon;
              const isCompleted = idx < currentSection;
              const isCurrent = idx === currentSection;
              
              return (
                <div key={idx} className="flex items-center">
                  <div className={`flex flex-col items-center transition-all duration-500 ${isCurrent ? 'scale-110' : 'scale-100'}`}>
                    <div className={`relative mb-2`}>
                      <div className={`p-4 rounded-2xl transition-all duration-500 ${
                        isCompleted 
                          ? 'bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg' 
                          : isCurrent 
                          ? 'bg-gradient-to-br from-teal-500 to-cyan-600 shadow-2xl shadow-teal-500/50 ring-4 ring-teal-400/30' 
                          : 'bg-slate-800 border-2 border-slate-700'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6 text-white" />
                        ) : (
                          <SectionIcon className={`w-6 h-6 ${isCurrent ? 'text-white animate-pulse' : 'text-slate-500'}`} />
                        )}
                      </div>
                      {isCurrent && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                      )}
                    </div>
                    <span className={`text-xs text-center max-w-[90px] transition-colors ${
                      isCurrent ? 'text-teal-400' : isCompleted ? 'text-teal-500' : 'text-slate-500'
                    }`}>
                      {section.title}
                    </span>
                  </div>
                  {idx < sections.length - 1 && (
                    <div className={`w-20 h-1 mb-8 mx-1 rounded-full transition-all duration-700 ${
                      isCompleted ? 'bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg' : 'bg-slate-700'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Card - Com animações */}
        <Card className={`bg-slate-800/70 backdrop-blur-xl border-2 border-slate-700 rounded-3xl p-8 shadow-2xl mb-6 transition-all duration-500 ${
          animate ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
        }`}>
          {/* Seção Header */}
          <div className="mb-8 pb-6 border-b-2 border-slate-700">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white border-0">
                    Etapa {currentSection + 1}
                  </Badge>
                  {sectionComplete && (
                    <Badge className="bg-green-500 text-white border-0 animate-pulse">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Completo
                    </Badge>
                  )}
                </div>
                <h2 className="text-2xl text-white mb-2">{sections[currentSection].title}</h2>
                <p className="text-slate-300">{sections[currentSection].subtitle}</p>
              </div>
              <div className="text-right bg-slate-700/50 rounded-xl px-4 py-3 border border-slate-600">
                <div className="text-xs text-slate-400 mb-1">Tempo estimado</div>
                <div className="flex items-center gap-1 text-teal-400">
                  <Clock className="w-4 h-4" />
                  <span>~2 min</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* SEÇÃO 1: RITMO DE ESTUDO */}
            {currentSection === 0 && (
              <>
                <div className="space-y-4">
                  <label className="block text-white text-lg">
                    Em qual período você tem melhor desempenho?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <OptionCard
                      label="Manhã"
                      description="Das 6h às 12h - Pico de cortisol e alerta"
                      selected={data.studyPeriod === "Manhã"}
                      onClick={() => setData({ ...data, studyPeriod: "Manhã" })}
                    />
                    <OptionCard
                      label="Tarde"
                      description="Das 12h às 18h - Energia estável e consistente"
                      selected={data.studyPeriod === "Tarde"}
                      onClick={() => setData({ ...data, studyPeriod: "Tarde" })}
                    />
                    <OptionCard
                      label="Noite"
                      description="Das 18h às 00h - Foco criativo e reflexivo"
                      selected={data.studyPeriod === "Noite"}
                      onClick={() => setData({ ...data, studyPeriod: "Noite" })}
                    />
                    <OptionCard
                      label="Madrugada"
                      description="Das 00h às 6h - Silêncio total e concentração"
                      selected={data.studyPeriod === "Madrugada"}
                      onClick={() => setData({ ...data, studyPeriod: "Madrugada" })}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-white text-lg">
                    Quanto tempo consegue focar sem pausa?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <OptionCard
                      label="15 minutos"
                      description="Sessões curtas e intensas"
                      selected={data.focusTime === "15"}
                      onClick={() => setData({ ...data, focusTime: "15" })}
                    />
                    <OptionCard
                      label="30 minutos"
                      description="Blocos moderados"
                      selected={data.focusTime === "30"}
                      onClick={() => setData({ ...data, focusTime: "30" })}
                    />
                    <OptionCard
                      label="45 minutos"
                      description="Ciclos completos"
                      selected={data.focusTime === "45"}
                      onClick={() => setData({ ...data, focusTime: "45" })}
                    />
                    <OptionCard
                      label="1 hora"
                      description="Foco prolongado"
                      selected={data.focusTime === "60"}
                      onClick={() => setData({ ...data, focusTime: "60" })}
                    />
                    <OptionCard
                      label="1h30min"
                      description="Imersão profunda"
                      selected={data.focusTime === "90"}
                      onClick={() => setData({ ...data, focusTime: "90" })}
                    />
                    <OptionCard
                      label="2h ou mais"
                      description="Maratonas de estudo"
                      selected={data.focusTime === "120"}
                      onClick={() => setData({ ...data, focusTime: "120" })}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-white text-lg">
                    Como você prefere estudar?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <OptionCard
                      label="Sozinho"
                      description="Concentração individual máxima"
                      selected={data.studyAlone === "Sozinho"}
                      onClick={() => setData({ ...data, studyAlone: "Sozinho" })}
                    />
                    <OptionCard
                      label="Em grupo"
                      description="Colaboração e troca de ideias"
                      selected={data.studyAlone === "Em grupo"}
                      onClick={() => setData({ ...data, studyAlone: "Em grupo" })}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-white text-lg">
                    Qual técnica funciona melhor para você?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <OptionCard
                      label="Pomodoro"
                      description="25min de foco + 5min de pausa"
                      selected={data.bestTechnique === "Pomodoro"}
                      onClick={() => setData({ ...data, bestTechnique: "Pomodoro" })}
                    />
                    <OptionCard
                      label="Mapas Mentais"
                      description="Conexões visuais e hierárquicas"
                      selected={data.bestTechnique === "Mapas Mentais"}
                      onClick={() => setData({ ...data, bestTechnique: "Mapas Mentais" })}
                    />
                    <OptionCard
                      label="Resumos"
                      description="Síntese e organização escrita"
                      selected={data.bestTechnique === "Resumos"}
                      onClick={() => setData({ ...data, bestTechnique: "Resumos" })}
                    />
                    <OptionCard
                      label="Flashcards"
                      description="Repetição espaçada e memorização"
                      selected={data.bestTechnique === "Flashcards"}
                      onClick={() => setData({ ...data, bestTechnique: "Flashcards" })}
                    />
                  </div>
                </div>
              </>
            )}

            {/* SEÇÃO 2: HABILIDADES */}
            {currentSection === 1 && (
              <>
                <div className="space-y-4">
                  <label className="block text-white text-lg">
                    Como você aprende melhor?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <OptionCard
                      label="Visual"
                      description="Imagens, diagramas, gráficos, vídeos"
                      selected={data.varkPreference === "Visual"}
                      onClick={() => setData({ ...data, varkPreference: "Visual" })}
                    />
                    <OptionCard
                      label="Auditivo"
                      description="Áudios, explicações, discussões, podcasts"
                      selected={data.varkPreference === "Auditivo"}
                      onClick={() => setData({ ...data, varkPreference: "Auditivo" })}
                    />
                    <OptionCard
                      label="Leitura/Escrita"
                      description="Textos, resumos, anotações, livros"
                      selected={data.varkPreference === "Leitura/Escrita"}
                      onClick={() => setData({ ...data, varkPreference: "Leitura/Escrita" })}
                    />
                    <OptionCard
                      label="Cinestésico"
                      description="Prática hands-on, movimento, experimentação"
                      selected={data.varkPreference === "Cinestésico"}
                      onClick={() => setData({ ...data, varkPreference: "Cinestésico" })}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-white text-lg">
                    Qual seu ritmo de aprendizado?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <OptionCard
                      label="Rápido e direto"
                      description="Prefiro absorver conteúdo de forma ágil"
                      selected={data.topIntelligences.includes("Rápido")}
                      onClick={() => setData({ ...data, topIntelligences: ["Rápido"] })}
                    />
                    <OptionCard
                      label="Reflexivo e detalhado"
                      description="Gosto de analisar profundamente cada tópico"
                      selected={data.topIntelligences.includes("Reflexivo")}
                      onClick={() => setData({ ...data, topIntelligences: ["Reflexivo"] })}
                    />
                  </div>
                </div>
              </>
            )}

            {/* SEÇÃO 3: OBJETIVOS */}
            {currentSection === 2 && (
              <>
                <div className="space-y-4">
                  <label className="block text-white text-lg">
                    Qual seu principal objetivo com os estudos?
                  </label>
                  <div className="grid grid-cols-1 gap-4">
                    <OptionCard
                      label="Passar em concursos ou vestibulares"
                      description="Foco em aprovação e resultados concretos"
                      selected={data.mainMotivation === "Passar em concursos ou vestibulares"}
                      onClick={() => setData({ ...data, mainMotivation: "Passar em concursos ou vestibulares" })}
                    />
                    <OptionCard
                      label="Desenvolver habilidades profissionais"
                      description="Crescimento na carreira e mercado de trabalho"
                      selected={data.mainMotivation === "Desenvolver habilidades profissionais"}
                      onClick={() => setData({ ...data, mainMotivation: "Desenvolver habilidades profissionais" })}
                    />
                    <OptionCard
                      label="Aprender por interesse pessoal"
                      description="Curiosidade, paixão pelo conhecimento"
                      selected={data.mainMotivation === "Aprender por interesse pessoal"}
                      onClick={() => setData({ ...data, mainMotivation: "Aprender por interesse pessoal" })}
                    />
                    <OptionCard
                      label="Melhorar desempenho acadêmico"
                      description="Notas, aproveitamento e desempenho escolar"
                      selected={data.mainMotivation === "Melhorar desempenho acadêmico"}
                      onClick={() => setData({ ...data, mainMotivation: "Melhorar desempenho acadêmico" })}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-white text-lg">
                    Qual seu maior desafio nos estudos?
                  </label>
                  <Textarea
                    placeholder="Ex: Tenho dificuldade em manter a concentração por longos períodos..."
                    value={data.mainChallenge}
                    onChange={(e) => {
                      setData({ ...data, mainChallenge: e.target.value });
                    }}
                    className="min-h-[120px] text-lg bg-slate-700/50 border-2 border-slate-600 text-white placeholder:text-slate-400 focus:border-teal-500 resize-none transition-all"
                  />
                  <p className="text-sm text-slate-400 flex items-center gap-2 bg-slate-700/30 rounded-lg p-3 border border-slate-600">
                    <Zap className="w-4 h-4 text-amber-400" />
                    Isso nos ajuda a personalizar recomendações específicas para você
                  </p>
                </div>

                <div className="space-y-4">
                  <label className="block text-white text-lg">
                    Possui alguma condição que afeta seus estudos? <span className="text-slate-400 text-sm">(Opcional)</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["TDAH", "Dislexia", "Ansiedade", "Depressão", "Outro", "Nenhum"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setData({ 
                          ...data, 
                          conditions: toggleArrayValue(data.conditions, option) 
                        })}
                        className={`p-4 rounded-xl text-sm transition-all duration-300 ${
                          data.conditions.includes(option)
                            ? "bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg scale-105"
                            : "bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 text-slate-300 hover:border-teal-400 hover:scale-102"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </Card>

        {/* Navigation aprimorada */}
        <div className="flex justify-between items-center bg-slate-800/70 backdrop-blur-sm border-2 border-slate-700 rounded-2xl p-6 shadow-xl">
          <Button
            onClick={handlePrev}
            disabled={currentSection === 0}
            variant="outline"
            className="border-2 border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white hover:border-teal-500 disabled:opacity-30 h-12 px-6 transition-all hover:scale-105 disabled:hover:scale-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>

          <div className="flex gap-2">
            {sections.map((_, i) => (
              <div
                key={i}
                className={`h-2.5 rounded-full transition-all duration-700 ${
                  i === currentSection 
                    ? "w-10 bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg shadow-teal-500/50" 
                    : i < currentSection 
                    ? "w-2.5 bg-teal-400" 
                    : "w-2.5 bg-slate-600"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            disabled={!sectionComplete}
            className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 disabled:from-slate-700 disabled:to-slate-800 shadow-xl h-12 px-8 transition-all hover:scale-105 disabled:hover:scale-100 disabled:opacity-50"
          >
            {currentSection === totalSections - 1 ? (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Finalizar Configuração
              </>
            ) : (
              <>
                Próxima Etapa
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </div>

        {/* Mensagem final quando completa tudo */}
        {answeredQuestions === totalQuestions && (
          <div className="mt-6 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl p-6 shadow-2xl text-center animate-scale-in">
            <div className="flex items-center justify-center gap-3 text-white mb-2">
              <Trophy className="w-6 h-6 fill-white animate-bounce" />
              <span className="text-xl">Parabéns! Você está pronto!</span>
              <Trophy className="w-6 h-6 fill-white animate-bounce animation-delay-150" />
            </div>
            <p className="text-white/90 text-sm">
              Seu perfil está completo. Prepare-se para uma experiência de aprendizado personalizada!
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes scale-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animation-delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </div>
  );
}