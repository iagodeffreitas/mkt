import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Search, Home, LayoutTemplate, MonitorSmartphone, PenTool, Infinity, MessageSquare, Wrench, Calculator, CheckSquare, Users, Briefcase, MessageCircle, BarChart3, Lock, Bell, Star, Zap, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/Button';

const MENU_ITEMS = [
  { name: 'Início', path: '/app', icon: Home, exact: true },
  { type: 'divider' },
  { name: 'Funis', path: '/app/categoria/funis', icon: Infinity },
  { name: 'Páginas', path: '/app/categoria/paginas', icon: LayoutTemplate },
  { name: 'Criativos', path: '/app/categoria/criativos', icon: MonitorSmartphone },
  { name: 'Templates', path: '/app/categoria/templates', icon: PenTool },
  { name: 'Automações', path: '/app/categoria/automacoes', icon: Zap },
  { name: 'Copies', path: '/app/categoria/copies', icon: MessageSquare },
  { name: 'Ferramentas', path: '/app/categoria/ferramentas', icon: Wrench },
  { name: 'Planilhas', path: '/app/categoria/planilhas', icon: Calculator },
  { name: 'Checklists', path: '/app/categoria/checklists', icon: CheckSquare },
  { type: 'divider' },
  { name: 'Afiliados', path: '/app/categoria/afiliados', icon: Users },
  { name: 'Prestação de Serviços', path: '/app/categoria/servicos', icon: Briefcase },
  { name: 'WhatsApp e Atendimento', path: '/app/categoria/whatsapp', icon: MessageCircle },
  { name: 'Tráfego Pago', path: '/app/categoria/trafego', icon: BarChart3 },
  { name: 'Conteúdos +18', path: '/app/categoria/adult', icon: Lock, alert: true },
  { type: 'divider' },
  { name: 'Atualizações', path: '/app/explore?filter=new', icon: Bell },
  { name: 'Favoritos', path: '/app/explore?filter=favs', icon: Star },
];

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar Desktop */}
      <aside className="w-64 border-r border-border bg-surface flex-shrink-0 flex flex-col hidden md:flex h-screen sticky top-0">
        <div className="h-20 px-8 flex items-center gap-3 border-b border-border cursor-pointer pb-2" onClick={() => navigate('/app')}>
          <div className="w-8 h-8 bg-brand rounded flex items-center justify-center font-bold text-black border-none text-sm">A</div>
          <span className="text-lg font-bold tracking-tight uppercase">Acervo <span className="text-brand">Pro</span></span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-2 custom-scrollbar">
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2 mt-4 px-4">Menu Principal</p>
          {MENU_ITEMS.map((item, i) => {
            if (item.type === 'divider') {
              return <div key={`div-${i}`} className="h-px bg-border my-4 mx-4" />;
            }

            const Icon = item.icon as any;
            return (
              <NavLink
                key={item.path}
                to={item.path!}
                end={item.exact}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                    isActive 
                      ? 'bg-white/5 text-white' 
                      : 'text-white/40 hover:bg-white/5 hover:text-white'
                  } ${item.alert ? 'hover:text-red-400' : ''}`
                }
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </NavLink>
            );
          })}
        </div>

        <div className="p-4 border-t border-border">
          <button onClick={() => navigate('/')} className="flex items-center gap-3 text-sm font-medium text-muted hover:text-primary transition-colors w-full px-3 py-2">
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-20 border-b border-border bg-surface flex flex-shrink-0 items-center justify-between px-4 md:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
            {/* Mobile menu trigger could go here */}
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input 
                type="text" 
                placeholder="Buscar funis, copys, templates..." 
                className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-5 py-2.5 text-sm text-primary focus:outline-none focus:border-brand transition-all"
                onKeyDown={(e) => {
                  if(e.key === 'Enter') navigate('/app/explore?q=' + e.currentTarget.value)
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 relative" ref={profileRef}>
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="hidden md:flex flex-col items-end">
                <span className="text-sm font-bold text-white group-hover:text-brand transition-colors">Usuário Pro</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Plano Pro</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-brand group-hover:border-brand/50 transition-colors">
                UP
              </div>
            </div>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute top-[120%] right-0 w-72 bg-[#111114] border border-white/10 rounded-2xl shadow-2xl p-5 z-50">
                 <div className="flex flex-col items-center pb-4 border-b border-white/5 mb-4">
                   <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold text-brand mb-3 shadow-inner">
                     UP
                   </div>
                   <span className="text-sm font-bold text-white uppercase tracking-widest">Usuário Pro</span>
                   <span className="text-xs text-white/40 font-medium">contato@usuariopro.com</span>
                 </div>
                 
                 <div className="space-y-4 mb-5">
                   <div className="bg-[#161618] rounded-xl p-3 border border-white/5">
                     <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Status da Assinatura</p>
                     <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_theme(colors.green.500)]"></div>
                       <span className="text-sm font-bold text-white">Ativa</span>
                     </div>
                   </div>
                   
                   <div className="bg-[#161618] rounded-xl p-3 border border-brand/20 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-16 h-16 bg-brand/5 rounded-full blur-xl"></div>
                     <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1 relative z-10">Tempo de Acesso</p>
                     <p className="text-xl font-black text-white relative z-10">365 <span className="text-sm font-bold text-white/50 lowercase tracking-normal">dias restantes</span></p>
                     <div className="w-full bg-white/5 h-1 mt-2 rounded-full overflow-hidden">
                       <div className="bg-brand h-full w-full"></div>
                     </div>
                   </div>
                 </div>

                 <Button variant="outline" className="w-full text-xs border-white/10 hover:bg-white/5 font-bold uppercase tracking-widest text-white/40 hover:text-white" onClick={() => navigate('/')}>
                   Sair da Conta
                 </Button>
              </div>
            )}
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-8">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
