import { useNavigate } from "react-router-dom";
import { useAuth, useOnboarding } from "../../hooks";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Brain, Rocket, SkipForward, Sparkles, Target, TrendingUp, Users } from "lucide-react";

export default function OnboardingChoice() {
  const navigate = useNavigate();
  const { displayName } = useAuth();
  const { skip } = useOnboarding();

  const handleStart = () => {
    navigate("/onboarding");
  };

  const handleSkip = () => {
    skip();
    // Mesmo pulando, leva para Questions como introdução à plataforma
    navigate("/questions");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <Card className="bg-white/95 backdrop-blur-xl border-white/20 shadow-2xl p-8 md:p-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-3 rounded-2xl">
              <Brain className="w-8 h-8 text-white" />
              <span className="text-white">NeuroMent</span>
            </div>

            <h1 className="text-3xl md:text-4xl text-teal-900">
              Bem-vindo(a), {displayName}! 🎉
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Antes de começar, gostaríamos de conhecer melhor seu perfil de aprendizagem para personalizar sua experiência
            </p>

            <div className="grid md:grid-cols-3 gap-4 py-6">
              <div className="bg-teal-50 p-4 rounded-xl">
                <Target className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <p className="text-sm text-teal-900">Identificar seu perfil cognitivo</p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-xl">
                <TrendingUp className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <p className="text-sm text-cyan-900">Criar cronograma personalizado</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl">
                <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm text-emerald-900">Adaptar IA ao seu nível</p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <Button
                onClick={handleStart}
                size="lg"
                className="w-full md:w-auto px-12 h-14 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Começar Questionário
                <span className="ml-2 text-sm opacity-90">(5 minutos)</span>
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">ou</span>
                </div>
              </div>

              <Button
                onClick={handleSkip}
                variant="outline"
                size="lg"
                className="w-full md:w-auto px-8 h-12 border-2 border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                <SkipForward className="w-4 h-4 mr-2" />
                Pular por Agora
              </Button>

              <p className="text-xs text-gray-500">
                * Você poderá responder o questionário depois nas configurações
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}