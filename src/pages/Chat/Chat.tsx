import { useState, useRef, useEffect } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Textarea } from "../../components/ui/textarea";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "../../components/ui/sheet";
import { Header } from "../../components/Header/Header";
import { useAuth } from "../../hooks";
import { 
  MessageCircle, 
  Send, 
  Upload, 
  FileText, 
  Sparkles, 
  Clock,
  BookOpen,
  Lightbulb,
  History,
  Plus,
  Trash2,
  Menu,
  X
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatHistory {
  id: string;
  title: string;
  mode: "general" | "specific";
  subject?: string;
  lastMessage: Date;
  messages: Message[];
}

export function Chat() {
  const { displayName, logout } = useAuth();
  const [activeMode, setActiveMode] = useState<"general" | "specific">("general");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content: "Olá! 👋\n\nSou seu assistente de estudos personalizado. Estou aqui para ajudá-la a aprender de forma mais eficiente e inteligente.\n\n**Algumas coisas que posso fazer:**\n• Explicar conceitos de qualquer matéria\n• Criar resumos e mapas mentais\n• Ensinar técnicas de memorização\n• Dar dicas de organização de estudos\n• Responder suas dúvidas\n\nQual sua dúvida de hoje?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [specificSubject, setSpecificSubject] = useState("");
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [chatHistories, setChatHistories] = useState<ChatHistory[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestedQuestions = {
    general: [
      "Como posso memorizar melhor?",
      "Explique mapas mentais",
      "Dicas para estudar matemática"
    ],
    specific: [
      "Explique este conceito",
      "Crie um resumo do conteúdo",
      "Monte um mapa mental"
    ]
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: generateResponse(inputMessage, activeMode),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  const generateResponse = (question: string, mode: "general" | "specific"): string => {
    if (mode === "specific" && specificSubject) {
      return `Sobre **${specificSubject}**:\n\n${question.toLowerCase().includes("resumo") 
        ? `Aqui está um resumo estruturado do conteúdo:\n\n**Pontos Principais:**\n• Conceito fundamental 1\n• Conceito fundamental 2\n• Aplicações práticas\n\nDeseja que eu aprofunde algum desses pontos?`
        : question.toLowerCase().includes("mapa mental")
        ? `Vou criar um mapa mental sobre ${specificSubject}! Aqui está a estrutura:\n\n🎯 **Tópico Central:** ${specificSubject}\n\n**Ramificações principais:**\n1. Definição\n2. Características\n3. Aplicações\n4. Exemplos\n\nQuer que eu salve este mapa mental para você?`
        : `Entendi sua dúvida sobre ${specificSubject}. Deixe-me explicar de forma clara:\n\nEste conceito é importante porque... [explicação detalhada aqui]\n\nPrecisa de mais exemplos ou exercícios práticos?`}`;
    }

    return question.toLowerCase().includes("memorizar")
      ? `Ótima pergunta! Aqui estão técnicas neurocientíficas para melhorar sua memorização:\n\n**1. Técnica Pomodoro:**\n• 25min de estudo focado\n• 5min de pausa\n\n**2. Repetição Espaçada:**\n• Revise após 1 dia\n• Depois após 3 dias\n• Então após 7 dias\n\n**3. Mapas Mentais:**\n• Conecte informações visualmente\n• Use cores e símbolos\n\nQual técnica você gostaria de experimentar primeiro?`
      : question.toLowerCase().includes("mapas mentais")
      ? `Mapas mentais são ferramentas visuais poderosas! 🧠\n\n**Como funcionam:**\n• Começam com ideia central\n• Ramificam-se em subtópicos\n• Usam cores e imagens\n• Ativam ambos hemisférios cerebrais\n\n**Benefícios:**\n✓ Memorização 30% mais eficiente\n✓ Conexões entre conceitos\n✓ Revisão rápida\n\nVocê pode criar mapas mentais na aba "Mapas Mentais" do Dashboard!`
      : `Entendo sua questão! Vou ajudá-lo com isso:\n\n${question}\n\nEsta é uma ótima pergunta. Baseado no seu perfil de aprendizagem, recomendo:\n\n• Dividir o conteúdo em partes menores\n• Usar técnicas visuais (você é visual!)\n• Fazer pausas regulares\n\nPrecisa de mais detalhes sobre algum ponto específico?`;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file.name);
      
      const uploadMessage: Message = {
        id: Date.now().toString(),
        type: "user",
        content: `📄 Arquivo enviado: ${file.name}`,
        timestamp: new Date()
      };

      setMessages([...messages, uploadMessage]);

      setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "assistant",
          content: `Arquivo **${file.name}** recebido com sucesso! ✅\n\nEstou analisando o conteúdo... Você pode me perguntar:\n\n• "Faça um resumo deste material"\n• "Crie um mapa mental com os principais conceitos"\n• "Explique [algum conceito do arquivo]"\n• "Gere perguntas para eu praticar"\n\nO que você gostaria que eu fizesse?`,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      }, 1500);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question);
    setIsSuggestionsOpen(false);
  };

  const saveCurrentChat = () => {
    if (messages.length <= 1) return;

    const newHistory: ChatHistory = {
      id: currentChatId || Date.now().toString(),
      title: messages[1]?.content.substring(0, 40) + "..." || "Nova conversa",
      mode: activeMode,
      subject: specificSubject || undefined,
      lastMessage: new Date(),
      messages: messages
    };

    setChatHistories(prev => {
      const existing = prev.findIndex(h => h.id === newHistory.id);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = newHistory;
        return updated;
      }
      return [newHistory, ...prev];
    });
  };

  const loadChat = (history: ChatHistory) => {
    setMessages(history.messages);
    setActiveMode(history.mode);
    setSpecificSubject(history.subject || "");
    setCurrentChatId(history.id);
    setIsHistoryOpen(false);
  };

  const startNewChat = () => {
    saveCurrentChat();
    setMessages([
      {
        id: "1",
        type: "assistant",
        content: "Olá! 👋\n\nSou seu assistente de estudos personalizado. Estou aqui para ajudá-la a aprender de forma mais eficiente e inteligente.\n\n**Algumas coisas que posso fazer:**\n• Explicar conceitos de qualquer matéria\n• Criar resumos e mapas mentais\n• Ensinar técnicas de memorização\n• Dar dicas de organização de estudos\n• Responder suas dúvidas\n\nQual sua dúvida de hoje?",
        timestamp: new Date()
      }
    ]);
    setCurrentChatId(null);
    setSpecificSubject("");
    setUploadedFile(null);
  };

  const deleteChat = (chatId: string) => {
    setChatHistories(prev => prev.filter(h => h.id !== chatId));
  };

  // Sidebar de Histórico (compartilhada entre desktop e mobile)
  const HistorySidebar = () => (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="p-3 border-b border-slate-700/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-teal-400" />
          <span className="text-white text-sm">Histórico</span>
        </div>
        <Button
          size="sm"
          onClick={startNewChat}
          className="bg-teal-600 hover:bg-teal-700 h-7 w-7 p-0"
        >
          <Plus className="w-3.5 h-3.5" />
        </Button>
      </div>

      <ScrollArea className="flex-1 px-2">
        <div className="space-y-1.5 py-2">
          {chatHistories.length === 0 ? (
            <div className="text-center py-8">
              <MessageCircle className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p className="text-xs text-slate-500">Nenhuma conversa</p>
            </div>
          ) : (
            chatHistories.map(history => (
              <div
                key={history.id}
                className={`group p-2.5 rounded-lg cursor-pointer transition-all ${
                  currentChatId === history.id
                    ? 'bg-teal-500/20 border border-teal-500/40'
                    : 'bg-slate-800/40 hover:bg-slate-800/60 border border-transparent'
                }`}
                onClick={() => loadChat(history)}
              >
                <p className="text-xs text-white truncate mb-1.5">{history.title}</p>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className={`text-[10px] h-4 px-1.5 ${
                      history.mode === "general"
                        ? "bg-blue-500/20 text-blue-300 border-blue-400/30"
                        : "bg-purple-500/20 text-purple-300 border-purple-400/30"
                    }`}
                  >
                    {history.mode === "general" ? "Geral" : "Específico"}
                  </Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteChat(history.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 h-5 w-5 p-0 text-slate-400 hover:text-red-400"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );

  // Sidebar de Sugestões (compartilhada entre desktop e mobile)
  const SuggestionsSidebar = () => (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="p-3 border-b border-slate-700/30">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          <span className="text-white text-sm">Sugestões</span>
        </div>
      </div>

      <ScrollArea className="flex-1 px-3">
        <div className="space-y-2 py-3">
          {suggestedQuestions[activeMode].map((question, i) => (
            <button
              key={i}
              onClick={() => handleSuggestedQuestion(question)}
              className="w-full text-left p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/30 hover:border-teal-500/40 transition-all group"
            >
              <div className="flex items-start gap-2">
                <div className="p-1 bg-teal-500/20 rounded mt-0.5">
                  <Sparkles className="w-3 h-3 text-teal-400" />
                </div>
                <p className="text-xs text-slate-300 group-hover:text-white leading-relaxed flex-1">{question}</p>
              </div>
            </button>
          ))}

          {/* Dicas úteis */}
          <div className="pt-2 mt-2 border-t border-slate-700/30">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs text-slate-400">Dicas Úteis</span>
            </div>
            
            <div className="space-y-2.5">
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-800/20">
                <div className="w-1 h-1 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-xs text-slate-400 leading-relaxed">Seja específico em suas perguntas para respostas mais precisas</p>
              </div>
              
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-800/20">
                <div className="w-1 h-1 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-xs text-slate-400 leading-relaxed">Peça exemplos práticos e exercícios para fixar melhor</p>
              </div>
              
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-800/20">
                <div className="w-1 h-1 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-xs text-slate-400 leading-relaxed">O assistente conhece seu perfil de aprendizagem</p>
              </div>
              
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-800/20">
                <div className="w-1 h-1 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-xs text-slate-400 leading-relaxed">Use o modo "Conteúdo Específico" para focar em uma matéria</p>
              </div>
              
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-800/20">
                <div className="w-1 h-1 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-xs text-slate-400 leading-relaxed">Faça upload de PDFs para análise detalhada</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header em todas as telas */}
      <Header userName={displayName} onLogout={logout} />
      
      <div className="container mx-auto max-w-[1800px] lg:px-4 lg:py-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-3 h-[calc(100vh-4rem)] lg:h-[calc(100vh-6.5rem)] overflow-hidden">
          
          {/* === DESKTOP: Histórico de Conversas === */}
          <div className="hidden lg:block lg:col-span-2 overflow-hidden">
            <Card className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/30 h-full">
              <HistorySidebar />
            </Card>
          </div>

          {/* === MOBILE & DESKTOP: Área Principal do Chat === */}
          <div className="lg:col-span-7 overflow-hidden flex flex-col h-full">
            {/* === MOBILE: Header com Menu === */}
            <div className="lg:hidden bg-slate-900/95 border-b border-slate-700/30 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sheet open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
                  <SheetTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-9 w-9 p-0 text-slate-300 hover:text-white hover:bg-slate-800"
                    >
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[280px] bg-slate-900 border-slate-700/30 p-0" showClose={false} aria-describedby="history-description">
                    <SheetHeader className="sr-only">
                      <SheetTitle>Histórico de Conversas</SheetTitle>
                      <SheetDescription id="history-description">
                        Visualize e gerencie suas conversas anteriores
                      </SheetDescription>
                    </SheetHeader>
                    <div className="h-full">
                      <HistorySidebar />
                    </div>
                  </SheetContent>
                </Sheet>

                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-1.5 rounded-lg">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">Assistente NeuroMent</span>
                </div>
              </div>

              <Sheet open={isSuggestionsOpen} onOpenChange={setIsSuggestionsOpen}>
                <SheetTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-9 w-9 p-0 text-slate-300 hover:text-white hover:bg-slate-800"
                  >
                    <Lightbulb className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] bg-slate-900 border-slate-700/30 p-0" showClose={false} aria-describedby="suggestions-description">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Sugestões e Dicas</SheetTitle>
                    <SheetDescription id="suggestions-description">
                      Explore perguntas sugeridas e dicas úteis para melhorar seus estudos
                    </SheetDescription>
                  </SheetHeader>
                  <div className="h-full">
                    <SuggestionsSidebar />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <Card className="bg-slate-900/80 backdrop-blur-sm border-0 lg:border border-slate-700/30 h-full flex flex-col overflow-hidden rounded-none lg:rounded-lg">
              
              {/* === DESKTOP: Header Inline === */}
              <div className="hidden lg:block border-b border-slate-700/30 px-4 py-2.5 bg-slate-900/50">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-teal-500 rounded-lg blur-md opacity-40"></div>
                      <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-1.5 rounded-lg">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <span className="text-white text-sm">Assistente NeuroMent</span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-slate-800/60 rounded-lg p-1">
                    <button
                      onClick={() => setActiveMode("general")}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs transition-all ${
                        activeMode === "general"
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      Chat Geral
                    </button>
                    <button
                      onClick={() => setActiveMode("specific")}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs transition-all ${
                        activeMode === "specific"
                          ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <BookOpen className="w-3 h-3" />
                      Conteúdo Específico
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-slate-400">Online</span>
                  </div>
                </div>

                {activeMode === "specific" && (
                  <div className="mt-2.5 flex gap-2">
                    <Input
                      placeholder="Digite o assunto (ex: Revolução Francesa)..."
                      value={specificSubject}
                      onChange={(e) => setSpecificSubject(e.target.value)}
                      className="bg-slate-800/60 border-slate-600/40 text-white placeholder:text-slate-500 h-8 text-xs"
                    />
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="border-slate-600/40 bg-slate-800/40 text-slate-300 hover:bg-slate-700 h-8 px-3 text-xs"
                    >
                      <Upload className="w-3 h-3 mr-1" />
                      PDF
                    </Button>
                    {uploadedFile && (
                      <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-500/40 text-xs h-8 px-2">
                        <FileText className="w-3 h-3 mr-1" />
                        {uploadedFile}
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              {/* === MOBILE: Tabs e Subject === */}
              <div className="lg:hidden border-b border-slate-700/30 px-3 py-2 bg-slate-900/50">
                <div className="flex items-center gap-1.5 bg-slate-800/60 rounded-lg p-1 mb-2">
                  <button
                    onClick={() => setActiveMode("general")}
                    className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-xs transition-all ${
                      activeMode === "general"
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                        : "text-slate-400"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Chat Geral
                  </button>
                  <button
                    onClick={() => setActiveMode("specific")}
                    className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-xs transition-all ${
                      activeMode === "specific"
                        ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
                        : "text-slate-400"
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Conteúdo Específico
                  </button>
                </div>

                {activeMode === "specific" && (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Digite o assunto..."
                      value={specificSubject}
                      onChange={(e) => setSpecificSubject(e.target.value)}
                      className="bg-slate-800/60 border-slate-600/40 text-white placeholder:text-slate-500 h-9 text-sm"
                    />
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="border-slate-600/40 bg-slate-800/40 text-slate-300 h-9 px-3"
                    >
                      <Upload className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* === Messages Area === */}
              <ScrollArea className="flex-1">
                <div className="space-y-3 max-w-full px-3 lg:px-4 pt-4 pb-8">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.type === "assistant" && (
                        <div className="flex-shrink-0 bg-gradient-to-br from-teal-500 to-cyan-600 p-1.5 rounded-lg h-fit">
                          <MessageCircle className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] lg:max-w-[70%] rounded-xl p-3 break-words ${
                          message.type === "user"
                            ? "bg-gradient-to-br from-teal-600 to-cyan-600 text-white"
                            : "bg-slate-800/70 text-white border border-slate-700/30"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap leading-relaxed break-words">{message.content}</p>
                        <p className="text-[10px] mt-1.5 opacity-50 flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" />
                          {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      {message.type === "user" && (
                        <div className="flex-shrink-0 bg-slate-700 p-1.5 rounded-lg h-fit">
                          <span className="text-sm">👤</span>
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* === Input Area === */}
              <div className="border-t border-slate-700/30 p-3 bg-slate-900/50">
                <div className="flex gap-2">
                  <Textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Digite sua dúvida aqui..."
                    className="bg-slate-800/60 border-slate-600/40 text-white placeholder:text-slate-500 resize-none text-sm"
                    rows={2}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 px-4 lg:px-5"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* === DESKTOP: Sidebar de Sugestões === */}
          <div className="hidden lg:block lg:col-span-3 overflow-hidden">
            <Card className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/30 h-full">
              <SuggestionsSidebar />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}