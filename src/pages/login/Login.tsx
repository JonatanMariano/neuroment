import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card } from "../../components/ui/card";
import {
  Brain,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  Zap,
  Award,
  ArrowLeft,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      login({ email, password });
      setIsLoading(false);
      navigate("/dashboard");
    }, 800);
  };

  const stats = [
    { icon: Users, label: "Estudantes ativos", value: "10k+" },
    { icon: TrendingUp, label: "Taxa de retenção", value: "87%" },
    { icon: Award, label: "Metas alcançadas", value: "95%" },
  ];

  const features = [
    { icon: Brain, text: "Cronograma adaptativo baseado em neurociência" },
    { icon: Sparkles, text: "IA personalizada para seu perfil de aprendizado" },
    { icon: Target, text: "Gamificação que aumenta motivação em 3x" },
    { icon: Zap, text: "Respeita seus ritmos biológicos de estudo" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4 text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="hidden lg:block text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20">
                <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-3 rounded-xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl tracking-tight">NeuroMent</h1>
                  <p className="text-sm text-teal-200">Powered by Neuroscience</p>
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl leading-tight">
                Bem-vindo de volta!
                <span className="block text-teal-300 mt-2">Continue sua jornada</span>
              </h2>

              <p className="text-lg text-teal-100">
                Acesse sua conta e continue evoluindo nos estudos com metodologia baseada em neurociência
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <Card key={i} className="bg-white/10 backdrop-blur-xl border-white/20 p-4 text-center">
                  <stat.icon className="w-6 h-6 text-teal-300 mx-auto mb-2" />
                  <div className="text-2xl text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-teal-200">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="space-y-3">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 backdrop-blur p-4 rounded-xl border border-white/10">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-2 rounded-lg">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-teal-100 text-sm pt-0.5">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-white/95 backdrop-blur-xl border-white/20 shadow-2xl p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl text-teal-900 mb-2">Entrar na sua conta</h3>
                <p className="text-gray-600">Insira suas credenciais para acessar</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-teal-900">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 border-gray-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-teal-900">
                    Senha
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 h-12 border-gray-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600">
                    <input type="checkbox" className="rounded" />
                    <span>Lembrar de mim</span>
                  </label>
                  <button type="button" className="text-teal-600 hover:text-teal-700">
                    Esqueceu a senha?
                  </button>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Não tem uma conta?</span>
                </div>
              </div>

              <Button
                onClick={() => navigate("/signup")}
                variant="outline"
                className="w-full h-12 border-2 border-teal-600 text-teal-700 hover:bg-teal-50"
              >
                Criar conta gratuita
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}