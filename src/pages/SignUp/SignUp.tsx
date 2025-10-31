import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card } from "../../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import {
  Brain,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  GraduationCap,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";
import type { SignUpData } from "../../types";

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const [formData, setFormData] = useState<SignUpData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "student",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.name.length < 3) {
      newErrors.name = "Nome deve ter pelo menos 3 caracteres";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "E-mail inválido";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      signUp(formData);
      
      setTimeout(() => {
        setIsLoading(false);
        navigate("/onboarding-choice");
      }, 100);
    }, 800);
  };

  const benefits = [
    { icon: Brain, text: "Cronograma adaptativo personalizado" },
    { icon: Zap, text: "IA que entende seu perfil de aprendizagem" },
    { icon: Target, text: "Sistema de metas e gamificação" },
    { icon: TrendingUp, text: "Acompanhamento de progresso em tempo real" },
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
                Comece sua jornada
                <span className="block text-teal-300 mt-2">rumo ao sucesso</span>
              </h2>

              <p className="text-lg text-teal-100">
                Crie sua conta gratuitamente e tenha acesso a uma plataforma completa de estudos baseada em neurociência
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 backdrop-blur p-4 rounded-xl border border-white/10">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-2 rounded-lg">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-teal-100 text-sm pt-0.5">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-white/95 backdrop-blur-xl border-white/20 shadow-2xl p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl text-teal-900 mb-2">Criar sua conta</h3>
                <p className="text-gray-600">Preencha os dados abaixo para começar</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-teal-900">Nome completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10 h-12 border-gray-300"
                      required
                    />
                  </div>
                  {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-teal-900">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 h-12 border-gray-300"
                      required
                    />
                  </div>
                  {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-teal-900">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                  {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-teal-900">Confirmar senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="pl-10 pr-10 h-12 border-gray-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword}</p>}
                </div>

                <div className="space-y-3">
                  <Label className="text-teal-900">Você é:</Label>
                  <RadioGroup
                    value={formData.userType}
                    onValueChange={(value) => setFormData({ ...formData, userType: value as "student" | "autodidact" })}
                    className="grid grid-cols-2 gap-4"
                  >
                    <Label
                      htmlFor="student"
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition ${
                        formData.userType === "student"
                          ? "border-teal-600 bg-teal-50"
                          : "border-gray-200 hover:border-teal-300"
                      }`}
                    >
                      <RadioGroupItem value="student" id="student" className="sr-only" />
                      <GraduationCap className={`w-8 h-8 ${formData.userType === "student" ? "text-teal-600" : "text-gray-400"}`} />
                      <span className={`text-sm ${formData.userType === "student" ? "text-teal-900" : "text-gray-600"}`}>
                        Estudante
                      </span>
                    </Label>
                    <Label
                      htmlFor="autodidact"
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition ${
                        formData.userType === "autodidact"
                          ? "border-teal-600 bg-teal-50"
                          : "border-gray-200 hover:border-teal-300"
                      }`}
                    >
                      <RadioGroupItem value="autodidact" id="autodidact" className="sr-only" />
                      <Sparkles className={`w-8 h-8 ${formData.userType === "autodidact" ? "text-teal-600" : "text-gray-400"}`} />
                      <span className={`text-sm ${formData.userType === "autodidact" ? "text-teal-900" : "text-gray-600"}`}>
                        Autodidata
                      </span>
                    </Label>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Criando conta..." : "Criar conta gratuita"}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Já tem uma conta?</span>
                </div>
              </div>

              <Button
                onClick={() => navigate("/login")}
                variant="outline"
                className="w-full h-12 border-2 border-teal-600 text-teal-700 hover:bg-teal-50"
              >
                Fazer login
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}