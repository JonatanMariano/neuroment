import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { X, Download, Edit2, Share2, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

interface MindMapNode {
  id: string;
  text: string;
  x: number;
  y: number;
  color: string;
  isCenter?: boolean;
  children?: string[];
}

interface MindMapViewerProps {
  nodes: MindMapNode[];
  title: string;
  onClose: () => void;
  onEdit?: () => void;
}

export function MindMapViewer({ nodes, title, onClose, onEdit }: MindMapViewerProps) {
  const [zoom, setZoom] = useState(1);

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
            stroke="rgba(148, 163, 184, 0.5)"
            strokeWidth="3"
            className="transition-all"
          />
        );
      });
    });

    return connections;
  };

  return (
    <div className="fixed inset-0 bg-slate-900/98 backdrop-blur-sm z-50 flex flex-col">
      {/* Header */}
      <div className="bg-slate-800/70 backdrop-blur-xl border-b-2 border-slate-700 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h2 className="text-xl text-white">{title}</h2>
            <p className="text-sm text-slate-400">Visualização de Mapa Mental</p>
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

            {onEdit && (
              <Button
                size="sm"
                variant="outline"
                onClick={onEdit}
                className="border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Editar
              </Button>
            )}

            <Button
              size="sm"
              variant="outline"
              className="border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Compartilhar
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
          className="w-full h-full relative bg-slate-900/50"
          style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            transform: `scale(${zoom})`,
            transformOrigin: 'center',
            transition: 'transform 0.2s'
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
              className="absolute"
              style={{
                left: node.x,
                top: node.y,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className={`${node.isCenter ? 'scale-110' : ''}`}>
                <div className={`relative bg-gradient-to-br ${node.color} rounded-2xl shadow-2xl border-2 border-slate-700`}>
                  <div className="p-4 min-w-[150px] max-w-[250px]">
                    <p className={`text-white text-center ${node.isCenter ? 'font-bold text-lg' : 'text-sm'}`}>
                      {node.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-800/70 backdrop-blur-xl border-t-2 border-slate-700 p-3">
        <div className="container mx-auto flex items-center justify-between text-xs text-slate-400">
          <span>🧠 Mapa Mental criado com NeuroMent</span>
          <Badge variant="outline" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
            {nodes.length} nós
          </Badge>
        </div>
      </div>
    </div>
  );
}
