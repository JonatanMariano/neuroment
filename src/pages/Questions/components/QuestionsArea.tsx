import { useState, useEffect, useRef } from "react";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Send, Bot, User, Sparkles, Zap, Clock, BookOpen } from "lucide-react";
import { Badge } from "../../../components/ui/badge";

interface QuestionsAreaProps {
  isFirstTime?: boolean;
  userName?: string;
}

export function QuestionsArea({ isFirstTime = false, userName = "Estudante" }: QuestionsAreaProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const getWelcomeMessage = () => {
    if (isFirstTime) {
      return `Olá, ${userName}! 🎉

Parabéns por completar seu perfil de aprendizagem! Agora tenho todas as informações para te ajudar da melhor forma possível.

**Com base no seu perfil, já sei:**
• Seu ritmo biológico ideal de estudo
• Seu estilo de aprendizagem preferido  
• Suas inteligências múltiplas dominantes
• Seus principais desafios

**Posso te ajudar com:**
📚 Explicação de conceitos complexos
🧠 Técnicas de memorização personalizadas
📊 Estratégias de estudo otimizadas
⏰ Planejamento baseado no seu ritmo
💡 E muito mais!

Como posso te ajudar hoje?`;
    }
    
    return `Olá! 👋

Sou seu assistente de estudos personalizado. Estou aqui para te ajudar a aprender de forma mais eficiente e inteligente.

**Algumas coisas que posso fazer:**
• Explicar conceitos de qualquer matéria
• Criar resumos e mapas mentais
• Ensinar técnicas de memorização
• Dar dicas de organização de estudos
• Responder suas dúvidas

Qual sua dúvida de hoje?`;
  };

  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([ 
    { 
      text: getWelcomeMessage(), 
      isUser: false 
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickQuestions = isFirstTime ? [
    { icon: Zap, text: "Como funciona o cronograma adaptativo?", color: "text-amber-600" },
    { icon: Clock, text: "Qual é o melhor horário para eu estudar?", color: "text-blue-600" },
    { icon: BookOpen, text: "Como criar mapas mentais eficazes?", color: "text-purple-600" },
    { icon: Sparkles, text: "Explique meu perfil de aprendizagem", color: "text-teal-600" },
  ] : [
    { icon: Sparkles, text: "Como posso memorizar melhor?", color: "text-teal-600" },
    { icon: BookOpen, text: "Explique mapas mentais", color: "text-purple-600" },
    { icon: Zap, text: "Dicas para estudar matemática", color: "text-amber-600" },
    { icon: Clock, text: "Como manter foco nos estudos?", color: "text-blue-600" },
  ];

  useEffect(() => {
    if (isFirstTime && messages.length === 1) {
      setMessages([{ text: getWelcomeMessage(), isUser: false }]);
    }
  }, [isFirstTime]);

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;
    
    setMessages([...messages, { text: messageText, isUser: true }]);
    setInput("");
    setIsTyping(true);
    
    setTimeout(() => {
      const responses = isFirstTime ? [
        `Excelente primeira pergunta! 🎯

Baseado no seu **perfil visual** que identificamos, recomendo especialmente:

✨ **Técnicas Visuais**
• Mapas mentais coloridos e organizados
• Diagramas e esquemas visuais
• Flashcards com imagens

⏰ **Timing Ideal**
Seu melhor horário é pela **manhã**, quando sua concentração está no pico.

🎨 **Aproveitando suas Inteligências**
Como você tem forte inteligência espacial, use esquemas visuais e organize informações em mapas!

Quer que eu te mostre como criar um mapa mental eficaz?`,
        
        `Ótima dúvida! 💡

Notei que você mencionou ter dificuldade com **procrastinação**. Vou te dar estratégias poderosas:

🍅 **Técnica Pomodoro**
• 25 minutos de foco total
• 5 minutos de pausa
• A cada 4 ciclos, pausa maior (15-30min)

⚡ **Por que funciona para você:**
Seu perfil se beneficia de metas curtas e alcançáveis. Isso mantém a motivação alta!

🌅 **Aproveite seu ritmo**
Estude nas manhãs quando sua energia está no máximo. Reserve tarde/noite para revisões mais leves.

Quer mais dicas personalizadas de organização?`,
        
        `Perfeito! 🧠

Para **maximizar sua retenção**, vou te ensinar a técnica mais poderosa:

🎯 **Recuperação Ativa**
Em vez de apenas reler:
1. Feche o material
2. Tente explicar em voz alta
3. Ensine para alguém (ou para você mesmo!)
4. Crie perguntas sobre o conteúdo

📊 **Resultados científicos:**
Isso aumenta a retenção em até **50%** comparado à releitura passiva!

✅ **Adaptado ao seu perfil:**
Como você é mais ${Math.random() > 0.5 ? 'visual' : 'cinestésico'}, combine isso com esquemas e anotações.

Posso te ajudar a criar um plano de estudos com essas técnicas?`,
      ] : [
        `Excelente pergunta! 🎯

A **memorização eficaz** vai muito além de decorar. Aqui está o que a neurociência recomenda:

🔄 **Revisão Espaçada**
• 1º revisão: após 24h
• 2º revisão: após 1 semana  
• 3º revisão: após 1 mês

🧠 **Técnicas Poderosas:**
✅ Criar associações visuais
✅ Ensinar o conteúdo para alguém
✅ Fazer resumos com suas palavras
✅ Usar mnemônicos criativos

📈 **Resultado:** Aumento de até 80% na retenção de longo prazo!

Quer que eu te ensine técnicas específicas para alguma matéria?`,
        
        `Ótima dúvida! 💡

Mapas mentais são ferramentas **incríveis** para organizar ideias e memorizar:

🎨 **Como criar:**
1. Coloque o tema central no meio
2. Crie ramificações com subtópicos
3. Use cores diferentes para cada ramo
4. Adicione ícones e imagens
5. Conecte ideias relacionadas

🧠 **Por que funciona:**
• Estimula ambos hemisférios cerebrais
• Cria conexões visuais fortes
• Facilita a recuperação da informação

✨ **Dica:** No NeuroMent você pode criar mapas mentais digitais ou fazer upload de PDFs para gerar automaticamente!

Quer experimentar criar um agora?`,
        
        `Excelente tema! 📚

Matemática exige uma abordagem estratégica:

✍️ **Prática > Teoria**
• Faça MUITOS exercícios
• Não só leia exemplos, resolva você mesmo
• Refaça questões que errou

🎯 **Técnicas Específicas:**
1. **Entenda, não decore** fórmulas
2. **Explique** o raciocínio em voz alta
3. **Conecte** com situações reais
4. **Revise** conceitos anteriores frequentemente

⏰ **Melhor horário:**
Manhã para conceitos novos, tarde para praticar.

📊 **Meta:** 30min de teoria + 1h de exercícios diários.

Quer um plano de estudos específico para matemática?`,
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, { 
        text: randomResponse, 
        isUser: false 
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    handleSend(question);
  };

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-6">
      {/* Chat Principal */}
      <Card className="bg-slate-800/70 backdrop-blur-xl border-2 border-slate-700 shadow-2xl overflow-hidden flex flex-col h-[calc(100vh-280px)] min-h-[600px]">
        {/* Header do Chat */}
        <div className="p-5 border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl blur-md opacity-50"></div>
              <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-2.5 rounded-xl">
                <Bot className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-white">Assistente NeuroMent</h3>
              <p className="text-xs text-slate-400">Personalizado com IA</p>
            </div>
          </div>
          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
            Online
          </Badge>
        </div>

        {/* Mensagens */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-900/30">
          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-3 duration-300`}
            >
              <div className={`flex items-end gap-3 max-w-[80%] ${msg.isUser ? 'flex-row-reverse' : ''}`}>
                <div className={`p-2 rounded-xl flex-shrink-0 ${
                  msg.isUser 
                    ? 'bg-teal-500/20 border border-teal-500/30' 
                    : 'bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg'
                }`}>
                  {msg.isUser ? (
                    <User className="w-4 h-4 text-teal-400" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`px-4 py-3 rounded-2xl shadow-lg ${
                  msg.isUser 
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-br-md' 
                    : 'bg-slate-800/80 backdrop-blur-sm text-slate-100 border-2 border-slate-700 rounded-bl-md'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-in fade-in slide-in-from-bottom-3 duration-300">
              <div className="flex items-end gap-3 max-w-[80%]">
                <div className="p-2 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700 shadow-lg">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input de Mensagem */}
        <div className="p-5 border-t border-slate-700 bg-slate-800/50">
          <div className="flex gap-3">
            <Input
              placeholder="Digite sua dúvida aqui..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isTyping && handleSend()}
              disabled={isTyping}
              className="flex-1 h-12 bg-slate-700/50 border-2 border-slate-600 text-white placeholder:text-slate-400 focus:border-teal-500 focus:bg-slate-700 transition-all"
            />
            <Button 
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="h-12 px-6 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 disabled:opacity-50 shadow-lg hover:shadow-xl transition-all"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Sidebar com Sugestões */}
      <div className="space-y-4">
        <Card className="p-5 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-2 border-purple-500/30">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <h3 className="text-purple-300">
              {isFirstTime ? "Comece por aqui" : "Perguntas sugeridas"}
            </h3>
          </div>
          <div className="space-y-2">
            {quickQuestions.map((item, i) => (
              <Button
                key={i}
                variant="outline"
                onClick={() => handleQuickQuestion(item.text)}
                className="w-full justify-start text-left h-auto py-3 px-4 bg-slate-800/50 hover:bg-slate-700/70 border-slate-600 hover:border-purple-500 transition-all group text-slate-200"
              >
                <item.icon className={`w-4 h-4 mr-3 flex-shrink-0 ${item.color.replace('600', '400')} group-hover:scale-110 transition-transform`} />
                <span className="text-sm">{item.text}</span>
              </Button>
            ))}
          </div>
        </Card>

        <Card className="p-5 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border-2 border-teal-500/30">
          <h3 className="text-teal-300 mb-3">💡 Dicas</h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-0.5">•</span>
              <span>Seja específico em suas perguntas para respostas mais precisas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-0.5">•</span>
              <span>Você pode pedir exemplos práticos e exercícios</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-0.5">•</span>
              <span>O assistente conhece seu perfil de aprendizagem</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}