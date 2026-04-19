import { MOCK_ITEMS } from '@/data/mock';
import { ItemCard } from '@/components/ui/ItemCard';
import { FileStack, FolderOpen, ArrowRight, Activity, Search, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function DashboardHome() {
  const recentItems = [...MOCK_ITEMS].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 4);
  const popularItems = MOCK_ITEMS.filter(i => i.isPopular).slice(0, 4);

  return (
    <div className="space-y-8 pb-10">
      {/* Header Area */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight uppercase break-words">Olá, <span className="text-brand">Marketer</span></h1>
        <p className="text-white/40 text-sm mt-1 uppercase tracking-widest font-bold">Explore arquivos prontos para a sua operação.</p>
      </div>

      {/* Mobile Search - Visible only on small screens */}
      <div className="relative w-full sm:hidden">
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input 
          type="text" 
          placeholder="Buscar..." 
          className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-5 py-3 text-sm text-primary focus:outline-none focus:ring-1 focus:border-brand"
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Arquivos Ativos', value: '450+', icon: FileStack },
          { label: 'Novidades (30d)', value: '+28', icon: Activity, colorClass: 'text-green-400' },
          { label: 'Templates', value: '114', icon: FolderOpen, colorClass: 'text-blue-400' },
          { label: 'Favoritos', value: '12', icon: Star, link: '/app/explore', colorClass: 'text-brand' }
        ].map((stat, i) => (
          <div key={i} className="bg-surface-card border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28 hover:border-brand/50 transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</span>
              <stat.icon className="w-4 h-4 text-white/30" />
            </div>
            {stat.link ? (
               <Link to={stat.link} className={`text-xl font-bold flex items-center hover:underline ${stat.colorClass || ''}`}>{stat.value}</Link>
            ) : (
               <span className={`text-xl font-bold ${stat.colorClass || ''}`}>{stat.value}</span>
            )}
          </div>
        ))}
      </div>

      {/* Section: Novidades */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white/60">Destaques da Semana</h2>
          <Link to="/app/explore?filter=new" className="text-xs text-brand hover:underline font-bold uppercase tracking-widest">Ver todos</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentItems.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
               <ItemCard item={item} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section: Mais acessados */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white/60">Mais Acessados</h2>
          <Link to="/app/explore?filter=popular" className="text-xs text-brand hover:underline font-bold uppercase tracking-widest">Ver todos</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularItems.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
               <ItemCard item={item} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
