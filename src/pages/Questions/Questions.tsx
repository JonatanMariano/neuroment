import { useEffect, useState } from "react";
import { useAuth } from "../../hooks";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/ui/button";
import { ArrowLeft, Sparkles, Brain } from "lucide-react";
import { QuestionsArea } from "./components/QuestionsArea";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Questions() {
  const { displayName, logout } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Verifica se é a primeira vez (parâmetro welcome=true)
    if (searchParams.get('welcome') === 'true') {
      setShowWelcome(true);
      // Remove o parâmetro da URL
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <Header userName={displayName} onLogout={logout} />

      <main className="relative container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-4 rounded-2xl shadow-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl text-white mb-1">
                {showWelcome ? `Olá, ${displayName}! 👋` : 'Assistente NeuroMent IA'}
              </h1>
              <p className="text-slate-300">
                {showWelcome 
                  ? 'Vamos começar sua jornada de aprendizado personalizado' 
                  : 'Tire suas dúvidas e estude de forma inteligente'}
              </p>
            </div>
          </div>
          
          <Button
            onClick={() => navigate('/dashboard')}
            variant="outline"
            className="hidden lg:flex border-2 border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white hover:border-teal-500 transition-all"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Dashboard
          </Button>
        </div>

        {/* Área do Chat - Foco principal */}
        <QuestionsArea isFirstTime={showWelcome} userName={displayName} />

        {/* Botão mobile para dashboard */}
        <Button
          onClick={() => navigate('/dashboard')}
          variant="outline"
          className="w-full mt-6 lg:hidden border-2 border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white h-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Dashboard
        </Button>
      </main>
    </div>
  );
}