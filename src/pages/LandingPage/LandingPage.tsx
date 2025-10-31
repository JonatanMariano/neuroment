import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import {
  Brain,
  Check,
  TrendingUp,
  Zap,
  Target,
  BookOpen,
  Award,
  BarChart3,
  Sparkles,
  Star,
  ArrowRight,
  Shield,
  Rocket,
  Building2,
  ChevronRight,
} from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleSignUp = () => navigate("/signup");

  const features = [
    {
      icon: Brain,
      title: "Neurociência Aplicada",
      description:
        "Cronogramas adaptativos baseados em seus ritmos biológicos e perfil cognitivo",
    },
    {
      icon: Zap,
      title: "IA Personalizada",
      description:
        "Chatbot contextual que entende suas dúvidas e adapta as respostas ao seu nível",
    },
    {
      icon: Target,
      title: "Mapas Mentais",
      description:
        "Crie mapas manualmente ou faça upload de PDFs para análise com IA",
    },
    {
      icon: TrendingUp,
      title: "Gamificação Motivadora",
      description:
        "Sistema completo de níveis, badges, sequências e rankings para manter você engajado",
    },
    {
      icon: BarChart3,
      title: "Diagnóstico Cognitivo",
      description:
        "Identifique seu perfil de aprendizagem e receba recomendações personalizadas",
    },
    {
      icon: Award,
      title: "Redução de Evasão",
      description:
        "Metodologia comprovada para aumentar motivação e engajamento nos estudos",
    },
  ];

  const plans = [
    {
      name: "Free",
      price: "R$ 0",
      period: "/mês",
      description: "Funcionalidades essenciais para começar",
      badge: null,
      features: [
        "Diagnóstico cognitivo básico",
        "Plano de estudos semanal simplificado",
        "Acesso aos mapas mentais manuais",
        "Gamificação básica (níveis e badges)",
        "Chatbot com 10 perguntas/dia",
        "Comunidade de estudantes",
      ],
      cta: "Começar Grátis",
      highlighted: false,
      icon: BookOpen,
    },
    {
      name: "Premium",
      price: "R$ 29,90",
      period: "/mês",
      description: "Experiência completa e personalizada",
      badge: "Mais Popular",
      features: [
        "Tudo do plano Free, mais:",
        "Cronogramas de estudo adaptativos",
        "Feedbacks inteligentes em tempo real",
        "Relatórios cognitivos completos",
        "Gamificação aprimorada (rankings, conquistas)",
        "Integração completa com IA ilimitada",
        "Upload de PDFs para análise com IA",
        "Estatísticas detalhadas de desempenho",
        "Suporte prioritário",
      ],
      cta: "Assinar Premium",
      highlighted: true,
      icon: Rocket,
    },
    {
      name: "Institucional",
      price: "Sob Consulta",
      period: "",
      description: "Para escolas, universidades e cursos",
      badge: "Empresas",
      features: [
        "Tudo do plano Premium, mais:",
        "Relatórios detalhados de desempenho",
        "Painéis administrativos personalizados",
        "Métricas de aprendizagem da turma",
        "Gestão de múltiplos alunos",
        "API para integração com sistemas",
        "Onboarding e treinamento",
        "Suporte dedicado 24/7",
        "Customização da plataforma",
      ],
      cta: "Falar com Vendas",
      highlighted: false,
      icon: Building2,
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Estudante de Medicina",
      content:
        "O NeuroMent mudou completamente minha forma de estudar. Minhas notas melhoraram 40% e finalmente entendi como meu cérebro aprende!",
      rating: 5,
    },
    {
      name: "Prof. João Santos",
      role: "Coordenador Acadêmico",
      content:
        "Implementamos na nossa instituição e a taxa de evasão caiu 35%. Os alunos estão mais engajados e motivados.",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      role: "Concurseiro",
      content:
        "A gamificação me mantém focado todos os dias. Já conquistei mais de 50 badges e estou no top 10 do ranking!",
      rating: 5,
    },
  ];

  const stats = [
    { value: "10k+", label: "Estudantes Ativos" },
    { value: "87%", label: "Taxa de Retenção" },
    { value: "95%", label: "Metas Alcançadas" },
    { value: "35%", label: "Redução de Evasão" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-2 rounded-xl">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl text-white">NeuroMent</h1>
                <p className="text-xs text-teal-300">Powered by Neuroscience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={handleLogin}
                className="text-white hover:bg-white/10"
              >
                Entrar
              </Button>
              <Button
                onClick={handleSignUp}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
              >
                Começar Grátis
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 px-4 py-1.5">
              <Sparkles className="w-3 h-3 mr-2 inline" />
              Reduzindo a evasão escolar com ciência
            </Badge>

            <h1 className="text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Transforme sua forma de
              <span className="block bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                aprender e estudar
              </span>
            </h1>

            <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Plataforma inteligente que combina neurociência, IA e gamificação
              para potencializar seus resultados e manter você motivado todos os
              dias
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                onClick={handleSignUp}
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 h-14 text-lg shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Começar Gratuitamente
              </Button>
              <Button
                onClick={handleLogin}
                size="lg"
                variant="outline"
                className="border-2 border-teal-300 bg-teal-900/50 text-white hover:bg-teal-800/60 backdrop-blur px-8 h-14 text-lg w-full sm:w-auto shadow-lg"
              >
                Ver Demonstração
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border-white/20 p-6 text-center hover:bg-white/15 transition"
                >
                  <div className="text-3xl text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-teal-200">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
              Recursos
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              Por que escolher o NeuroMent?
            </h2>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Uma plataforma completa baseada em ciência para revolucionar seus
              estudos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-xl border-white/20 p-8 hover:bg-white/15 transition-all hover:scale-105 duration-300"
              >
                <div className="bg-gradient-to-br from-teal-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-white mb-3">{feature.title}</h3>
                <p className="text-teal-100">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
              Planos
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              Escolha o plano ideal para você
            </h2>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Do iniciante ao institucional, temos o plano perfeito para suas
              necessidades
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden backdrop-blur-xl transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border-teal-400/50 scale-105 shadow-2xl"
                    : "bg-white/10 border-white/20 hover:bg-white/15"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-center py-2 text-sm">
                    ⭐ Mais Popular
                  </div>
                )}

                {plan.badge && !plan.highlighted && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-cyan-500/30 text-cyan-200 border-cyan-400/50">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <div className={`p-8 ${plan.highlighted ? "pt-16" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-3 rounded-xl ${
                        plan.highlighted
                          ? "bg-gradient-to-br from-teal-400 to-cyan-500"
                          : "bg-white/10"
                      }`}
                    >
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white">{plan.name}</h3>
                    </div>
                  </div>

                  <p className="text-teal-200 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-4xl text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-teal-300">{plan.period}</span>
                    )}
                  </div>

                  <Button
                    onClick={handleSignUp}
                    className={`w-full h-12 mb-8 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/30"
                    }`}
                  >
                    {plan.cta}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 p-1 rounded-full ${
                            plan.highlighted
                              ? "bg-teal-400/30"
                              : "bg-white/10"
                          }`}
                        >
                          <Check className="w-4 h-4 text-teal-300" />
                        </div>
                        <span
                          className={`text-sm ${
                            feature.includes("Tudo do plano")
                              ? "text-teal-300"
                              : "text-white/90"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-teal-200 text-sm">
              💳 Pagamento seguro • 🔄 Cancele quando quiser • 🎁 7 dias grátis
              no Premium
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/5 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
              Depoimentos
            </Badge>
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              O que nossos alunos dizem
            </h2>
            <p className="text-teal-100 text-lg">
              Milhares de estudantes já transformaram seus estudos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-xl border-white/20 p-8 hover:bg-white/15 transition"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-white mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-sm text-teal-300">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Card className="bg-gradient-to-br from-teal-500/30 to-cyan-500/30 backdrop-blur-xl border-teal-400/50 p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              Pronto para revolucionar seus estudos?
            </h2>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de estudantes que já estão alcançando
              resultados extraordinários com o NeuroMent
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={handleSignUp}
                size="lg"
                className="bg-white text-teal-700 hover:bg-white/90 px-8 h-14 text-lg w-full sm:w-auto"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Começar Agora - É Grátis
              </Button>
              <Button
                onClick={handleLogin}
                size="lg"
                variant="outline"
                className="border-2 border-teal-700 bg-teal-800/80 text-white hover:bg-teal-700/90 backdrop-blur px-8 h-14 text-lg w-full sm:w-auto shadow-lg"
              >
                Já tenho conta
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-2 rounded-lg">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white">NeuroMent</h3>
              </div>
              <p className="text-teal-300 text-sm">
                Aprendizado baseado em neurociência para reduzir a evasão
                escolar e potencializar resultados.
              </p>
            </div>

            <div>
              <h4 className="text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-teal-300 text-sm">
                <li>
                  <button className="hover:text-white transition">
                    Funcionalidades
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">Planos</button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Depoimentos
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Institucional
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-teal-300 text-sm">
                <li>
                  <button className="hover:text-white transition">Blog</button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Central de Ajuda
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Comunidade
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Pesquisas
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-teal-300 text-sm">
                <li>
                  <button className="hover:text-white transition">
                    Termos de Uso
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Privacidade
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Cookies
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Contato
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-teal-300 text-sm">
              © 2025 NeuroMent. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-teal-300 text-sm">
              <Shield className="w-4 h-4" />
              <span>Dados protegidos e criptografados</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
