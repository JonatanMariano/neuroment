import { useNavigate, useLocation } from 'react-router-dom';
import { Brain, User, Settings, LogOut, Home, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { useState } from 'react';

interface HeaderProps {
  userName?: string;
  onLogout?: () => void;
}

export function Header({ userName, onLogout }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getInitials = (name: string) => {
    if (!name) return "ES";
    const names = name.split(" ");
    if (names.length === 1) {
      return names[0].substring(0, 2).toUpperCase();
    }
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  };

  const isActive = (path: string) => location.pathname === path;

  const handleMobileNavigate = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const handleMobileLogout = () => {
    setMobileMenuOpen(false);
    onLogout?.();
  };

  return (
    <header className="bg-slate-900/95 backdrop-blur-xl border-b-2 border-slate-800 text-white shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-1.5 sm:p-2 rounded-xl shadow-xl">
                  <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl text-white">NeuroMent</h1>
                <p className="text-xs sm:text-sm text-slate-400 hidden sm:block">
                  Aprendizagem Neurocientífica
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/dashboard')}
                className={`text-slate-300 hover:bg-slate-800 hover:text-white transition-all ${
                  isActive('/dashboard') ? 'bg-slate-800 text-white' : ''
                }`}
              >
                <Home className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/chat')}
                className={`text-slate-300 hover:bg-slate-800 hover:text-white transition-all ${
                  isActive('/chat') ? 'bg-slate-800 text-white' : ''
                }`}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Assistente IA
              </Button>
            </nav>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Menu Mobile - Hamburguer */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden text-slate-300 hover:bg-slate-800 hover:text-white h-9 w-9"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-slate-900 border-slate-800 w-[280px]">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg blur opacity-50"></div>
                        <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-2 rounded-lg">
                          <Brain className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-white">NeuroMent</h2>
                        <p className="text-xs text-slate-400">Menu de Navegação</p>
                      </div>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2 mt-6">
                  {/* Perfil do Usuário */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700 mb-4">
                    <Avatar className="h-10 w-10 border-2 border-teal-500">
                      <AvatarFallback className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white text-sm">
                        {getInitials(userName || "")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-white text-sm">{userName || "Estudante"}</p>
                      <p className="text-xs text-slate-400">Minha Conta</p>
                    </div>
                  </div>

                  {/* Navegação */}
                  <Button
                    variant="ghost"
                    className={`justify-start hover:bg-slate-800 hover:text-white w-full ${
                      isActive('/dashboard') 
                        ? 'bg-slate-800 text-white' 
                        : 'text-slate-300'
                    }`}
                    onClick={() => handleMobileNavigate('/dashboard')}
                  >
                    <Home className="mr-3 h-5 w-5" />
                    Dashboard
                  </Button>

                  <Button
                    variant="ghost"
                    className={`justify-start hover:bg-slate-800 hover:text-white w-full ${
                      isActive('/chat') 
                        ? 'bg-slate-800 text-white' 
                        : 'text-slate-300'
                    }`}
                    onClick={() => handleMobileNavigate('/chat')}
                  >
                    <MessageCircle className="mr-3 h-5 w-5" />
                    Assistente IA
                  </Button>

                  <div className="h-px bg-slate-700 my-2" />

                  <Button
                    variant="ghost"
                    className="justify-start text-slate-300 hover:bg-slate-800 hover:text-white w-full"
                    onClick={() => handleMobileNavigate('/perfil')}
                  >
                    <User className="mr-3 h-5 w-5" />
                    Meu Perfil
                  </Button>

                  <Button
                    variant="ghost"
                    className="justify-start text-slate-300 hover:bg-slate-800 hover:text-white w-full"
                    onClick={() => handleMobileNavigate('/configuracoes')}
                  >
                    <Settings className="mr-3 h-5 w-5" />
                    Configurações
                  </Button>

                  <div className="h-px bg-slate-700 my-2" />

                  <Button
                    variant="ghost"
                    className="justify-start text-red-400 hover:bg-red-950/30 hover:text-red-400 w-full"
                    onClick={handleMobileLogout}
                  >
                    <LogOut className="mr-3 h-5 w-5" />
                    Sair
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            {/* Settings Button - Desktop only */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex text-slate-400 hover:bg-slate-800 hover:text-white h-8 w-8 sm:h-10 sm:w-10"
            >
              <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            {/* Avatar Dropdown - Desktop only */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="hidden md:flex">
                <button className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-full">
                  <Avatar className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer hover:ring-2 hover:ring-teal-500 transition border-2 border-slate-700">
                    <AvatarFallback className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white text-xs sm:text-sm">
                      {getInitials(userName || "")}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-slate-800 border-slate-700">
                <DropdownMenuLabel>
                  <div>
                    <p className="text-white">{userName || "Estudante"}</p>
                    <p className="text-xs text-slate-400">Minha Conta</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-700" />
                
                <DropdownMenuItem className="cursor-pointer text-slate-300 focus:bg-slate-700 focus:text-white">
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-slate-300 focus:bg-slate-700 focus:text-white">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configurações</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-700" />
                <DropdownMenuItem
                  className="cursor-pointer text-red-400 focus:text-red-400 focus:bg-slate-700"
                  onClick={onLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Avatar Mobile - apenas visual */}
            <div className="md:hidden">
              <Avatar className="h-9 w-9 border-2 border-teal-500">
                <AvatarFallback className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white text-xs">
                  {getInitials(userName || "")}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}