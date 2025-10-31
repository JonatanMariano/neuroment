import { useState, useRef, useEffect } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { 
  Plus, 
  Trash2, 
  Save, 
  Download, 
  ZoomIn, 
  ZoomOut,
  Share2,
  Edit2,
  X,
  Check,
  Sparkles
} from "lucide-react";

interface MindMapNode {
  id: string;
  text: string;
  x: number;
  y: number;
  color: string;
  isCenter?: boolean;
  children?: string[];
}

interface MindMapCanvasProps {
  onSave?: (nodes: MindMapNode[]) => void;
  onClose?: () => void;
}

export function MindMapCanvas({ onSave, onClose }: MindMapCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<MindMapNode[]>([
    {
      id: "center",
      text: "Tópico Principal",
      x: 500,
      y: 350,
      color: "from-teal-500 to-cyan-600",
      isCenter: true,
      children: ["example1", "example2", "example3"]
    },
    {
      id: "example1",
      text: "Subtópico 1",
      x: 300,
      y: 200,
      color: "from-blue-500 to-blue-600",
      children: []
    },
    {
      id: "example2",
      text: "Subtópico 2",
      x: 700,
      y: 200,
      color: "from-purple-500 to-purple-600",
      children: []
    },
    {
      id: "example3",
      text: "Subtópico 3",
      x: 500,
      y: 550,
      color: "from-green-500 to-green-600",
      children: []
    }
  ]);
  
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [editingNode, setEditingNode] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const colors = [
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-pink-500 to-pink-600",
    "from-orange-500 to-orange-600",
    "from-green-500 to-green-600",
    "from-yellow-500 to-yellow-600",
    "from-red-500 to-red-600",
    "from-indigo-500 to-indigo-600",
  ];

  const addNode = (parentId?: string) => {
    const parent = parentId ? nodes.find(n => n.id === parentId) : nodes[0];
    if (!parent) return;

    const angle = Math.random() * Math.PI * 2;
    const distance = 150;
    const newNode: MindMapNode = {
      id: `node-${Date.now()}`,
      text: "Novo Tópico",
      x: parent.x + Math.cos(angle) * distance,
      y: parent.y + Math.sin(angle) * distance,
      color: colors[Math.floor(Math.random() * colors.length)],
      children: []
    };

    setNodes([...nodes, newNode]);
    
    // Adiciona conexão
    if (parent) {
      const updatedNodes = nodes.map(n => 
        n.id === parent.id 
          ? { ...n, children: [...(n.children || []), newNode.id] }
          : n
      );
      setNodes([...updatedNodes, newNode]);
    }

    // Inicia edição imediatamente
    setEditingNode(newNode.id);
    setEditText(newNode.text);
  };

  const deleteNode = (nodeId: string) => {
    if (nodeId === "center") return; // Não pode deletar o nó central
    
    // Remove o nó e todas as referências a ele
    const updatedNodes = nodes
      .filter(n => n.id !== nodeId)
      .map(n => ({
        ...n,
        children: (n.children || []).filter(childId => childId !== nodeId)
      }));
    
    setNodes(updatedNodes);
    setSelectedNode(null);
  };

  const updateNodeText = (nodeId: string, text: string) => {
    setNodes(nodes.map(n => n.id === nodeId ? { ...n, text } : n));
    setEditingNode(null);
    setEditText("");
  };

  const handleMouseDown = (e: React.MouseEvent, nodeId: string) => {
    if (editingNode) return;
    
    const node = nodes.find(n => n.id === nodeId);
    if (!node) return;

    setSelectedNode(nodeId);
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - node.x,
      y: e.clientY - node.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !selectedNode) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - dragOffset.x;
    const y = e.clientY - rect.top - dragOffset.y;

    setNodes(nodes.map(n => 
      n.id === selectedNode ? { ...n, x, y } : n
    ));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const startEdit = (nodeId: string) => {
    const node = nodes.find(n => n.id === nodeId);
    if (!node) return;
    
    setEditingNode(nodeId);
    setEditText(node.text);
  };

  const handleSave = () => {
    onSave?.(nodes);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(nodes, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mapa-mental.json';
    link.click();
  };

  // Desenha conexões entre nós
  const renderConnections = () => {
    const connections: JSX.Element[] = [];
    
    nodes.forEach(node => {
      (node.children || []).forEach(childId => {
        const child = nodes.find(n => n.id === childId);
        if (!child) return;

        const key = `${node.id}-${childId}`;
        connections.push(
          <line
            key={key}
            x1={node.x}
            y1={node.y}
            x2={child.x}
            y2={child.y}
            stroke="rgba(148, 163, 184, 0.3)"
            strokeWidth="2"
            className="transition-all"
          />
        );
      });
    });

    return connections;
  };

  return (
    <div className="fixed inset-0 bg-slate-900/98 backdrop-blur-sm z-50 flex flex-col">
      {/* Toolbar */}
      <div className="bg-slate-800/70 backdrop-blur-xl border-b-2 border-slate-700 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg text-white">Criador de Mapas Mentais</h2>
                <p className="text-xs text-slate-400">Clique e arraste para mover | Duplo clique para editar</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="flex items-center gap-2 bg-slate-700/50 rounded-lg p-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
                className="text-slate-300 hover:text-white h-8"
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Badge variant="outline" className="bg-slate-600 text-white border-slate-500">
                {Math.round(zoom * 100)}%
              </Badge>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setZoom(Math.min(2, zoom + 0.1))}
                className="text-slate-300 hover:text-white h-8"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>

            <div className="w-px h-8 bg-slate-600"></div>

            <Button
              size="sm"
              variant="outline"
              onClick={() => addNode("center")}
              className="border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Nó
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={handleExport}
              className="border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>

            <Button
              size="sm"
              onClick={handleSave}
              className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Salvar
            </Button>

            <Button
              size="sm"
              variant="ghost"
              onClick={onClose}
              className="text-slate-400 hover:text-white hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 overflow-hidden relative">
        <div
          ref={canvasRef}
          className="w-full h-full relative bg-slate-900/50"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            transform: `scale(${zoom})`,
            transformOrigin: 'center',
            transition: isDragging ? 'none' : 'transform 0.2s'
          }}
        >
          {/* SVG para as conexões */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {renderConnections()}
          </svg>

          {/* Nós */}
          {nodes.map(node => (
            <div
              key={node.id}
              className={`absolute transition-all ${isDragging && selectedNode === node.id ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{
                left: node.x,
                top: node.y,
                transform: 'translate(-50%, -50%)',
                zIndex: selectedNode === node.id ? 50 : 10
              }}
              onMouseDown={(e) => handleMouseDown(e, node.id)}
              onDoubleClick={() => startEdit(node.id)}
            >
              <div className={`relative group ${node.isCenter ? 'scale-110' : ''}`}>
                {/* Glow effect quando selecionado */}
                {selectedNode === node.id && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${node.color} rounded-2xl blur-xl opacity-50 animate-pulse`}></div>
                )}

                {/* Nó */}
                <div
                  className={`relative bg-gradient-to-br ${node.color} rounded-2xl shadow-2xl border-2 ${
                    selectedNode === node.id ? 'border-white' : 'border-slate-700'
                  } transition-all`}
                >
                  {editingNode === node.id ? (
                    // Modo de edição
                    <div className="p-3 min-w-[200px]">
                      <Input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            updateNodeText(node.id, editText);
                          }
                        }}
                        className="bg-white/90 text-slate-900 border-none mb-2"
                        autoFocus
                      />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => updateNodeText(node.id, editText)}
                          className="flex-1 bg-white/20 hover:bg-white/30 text-white"
                        >
                          <Check className="w-3 h-3 mr-1" />
                          Salvar
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            setEditingNode(null);
                            setEditText("");
                          }}
                          className="flex-1 bg-white/20 hover:bg-white/30 text-white"
                        >
                          <X className="w-3 h-3 mr-1" />
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  ) : (
                    // Modo de visualização
                    <div className="p-4 min-w-[150px] max-w-[250px]">
                      <p className={`text-white text-center ${node.isCenter ? 'font-bold text-lg' : 'text-sm'}`}>
                        {node.text}
                      </p>
                    </div>
                  )}
                </div>

                {/* Ações (aparecem no hover) */}
                {selectedNode === node.id && !editingNode && (
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      onClick={() => addNode(node.id)}
                      className="bg-slate-800 hover:bg-slate-700 text-white shadow-lg h-8"
                    >
                      <Plus className="w-3 h-3 mr-1" />
                      Filho
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => startEdit(node.id)}
                      className="bg-slate-800 hover:bg-slate-700 text-white shadow-lg h-8"
                    >
                      <Edit2 className="w-3 h-3" />
                    </Button>
                    {!node.isCenter && (
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteNode(node.id)}
                        className="shadow-lg h-8"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legenda/Instruções */}
      <div className="bg-slate-800/70 backdrop-blur-xl border-t-2 border-slate-700 p-3">
        <div className="container mx-auto flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-6">
            <span>💡 <strong className="text-slate-300">Clique e arraste</strong> para mover nós</span>
            <span>✏️ <strong className="text-slate-300">Duplo clique</strong> para editar texto</span>
            <span>➕ <strong className="text-slate-300">Hover</strong> para ver ações</span>
          </div>
          <Badge variant="outline" className="bg-teal-500/20 text-teal-400 border-teal-500/30">
            {nodes.length} nós criados
          </Badge>
        </div>
      </div>
    </div>
  );
}