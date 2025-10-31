import { useState } from "react";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Upload, Brain, FileText, Sparkles, CheckCircle2, Eye, Download, Trash2, Edit2 } from "lucide-react";
import { MindMapCanvas } from "../../../components/MindMap/MindMapCanvas";

interface MindMap {
  id: number;
  name: string;
  subject: string;
  date: string;
  size: string;
  thumbnail: string;
  nodes?: any[];
}

export function MindMapUpload() {
  const [mindMaps, setMindMaps] = useState<MindMap[]>([
    {
      id: 1,
      name: "Revolução Francesa",
      subject: "História",
      date: "28 Out",
      size: "2.3 MB",
      thumbnail: "🏛️"
    },
    {
      id: 2,
      name: "Funções Quadráticas",
      subject: "Matemática",
      date: "25 Out",
      size: "1.8 MB",
      thumbnail: "📐"
    }
  ]);

  const [isDragging, setIsDragging] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleSaveMindMap = (nodes: any[]) => {
    const newMap: MindMap = {
      id: Date.now(),
      name: nodes[0]?.text || "Novo Mapa Mental",
      subject: "Personalizado",
      date: new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' }),
      size: `${Math.round(JSON.stringify(nodes).length / 1024)}KB`,
      thumbnail: "🧠",
      nodes
    };
    
    setMindMaps([newMap, ...mindMaps]);
    setIsCreating(false);
  };

  const handleDeleteMap = (mapId: number) => {
    setMindMaps(mindMaps.filter(m => m.id !== mapId));
  };

  return (
    <>
      {isCreating && (
        <MindMapCanvas 
          onSave={handleSaveMindMap}
          onClose={() => setIsCreating(false)}
        />
      )}
      
      <div className="space-y-6">
        {/* Upload Card */}
        <Card className="bg-slate-800/70 backdrop-blur-xl border-2 border-slate-700 shadow-2xl p-6 overflow-hidden relative">
          {/* Background decorativo */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-2xl shadow-xl">
                  <Brain className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl text-white mb-1">Mapas Mentais</h2>
                <p className="text-sm text-slate-400">Upload de PDF, criação manual ou geração com IA</p>
              </div>
            </div>

            {/* Upload Zone */}
            <div
              onDragEnter={() => setIsDragging(true)}
              onDragLeave={() => setIsDragging(false)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
              }}
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer group ${
                isDragging
                  ? 'border-teal-500 bg-teal-500/10'
                  : 'border-slate-600 hover:border-teal-500/50 hover:bg-slate-700/30'
              }`}
            >
              {/* Gradient overlay quando hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
              
              <div className="relative">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl">
                    <Upload className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl text-white mb-2">Arraste seus arquivos aqui</h3>
                <p className="text-sm text-slate-400 mb-4">Aceita PDF, PNG, JPG (até 10MB)</p>
                
                <div className="flex items-center justify-center gap-3">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all">
                    <FileText className="w-4 h-4 mr-2" />
                    Selecionar Arquivo
                  </Button>
                  <Button 
                    onClick={() => setIsCreating(true)}
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Edit2 className="w-4 h-4 mr-2" />
                    Criar Manualmente
                  </Button>
                  <Button variant="outline" className="border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white hover:border-teal-500">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Gerar com IA
                  </Button>
                </div>
              </div>
            </div>

            {/* Info sobre IA */}
            <div className="mt-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white mb-1">✨ Múltiplas Formas de Criar</h4>
                  <p className="text-sm text-slate-300">
                    • <strong>Upload PDF:</strong> Envie material e gere automaticamente<br />
                    • <strong>Manual:</strong> Crie visualmente com arrastar e soltar<br />
                    • <strong>IA:</strong> Gere a partir de tópicos ou prompts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Mapas Existentes */}
        {mindMaps.length > 0 && (
          <Card className="bg-slate-800/70 backdrop-blur-xl border-2 border-slate-700 shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-white">Seus Mapas Mentais</h3>
              <Badge variant="outline" className="bg-teal-500/20 text-teal-400 border-teal-500/30">
                {mindMaps.length} mapas
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mindMaps.map((map) => (
                <div
                  key={map.id}
                  className="group bg-slate-700/30 backdrop-blur-sm border-2 border-slate-600 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-3">
                    {/* Thumbnail */}
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-lg text-2xl flex-shrink-0">
                      {map.thumbnail}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white mb-1 truncate">{map.name}</h4>
                      <p className="text-sm text-slate-400 mb-2">{map.subject}</p>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span>{map.date}</span>
                        <span>•</span>
                        <span>{map.size}</span>
                      </div>
                    </div>

                    {/* Ações */}
                    <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-teal-400 hover:bg-slate-600 h-8 w-8 p-0">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-blue-400 hover:bg-slate-600 h-8 w-8 p-0">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-red-400 hover:bg-slate-600 h-8 w-8 p-0" onClick={() => handleDeleteMap(map.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </>
  );
}