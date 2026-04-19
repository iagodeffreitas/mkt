import { useState, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { MOCK_ITEMS, CATEGORIES } from '@/data/mock';
import { ItemCard } from '@/components/ui/ItemCard';
import { motion } from 'motion/react';
import { Filter } from 'lucide-react';

export default function Explore() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  
  const query = searchParams.get('q') || '';
  const filterParam = searchParams.get('filter') || '';

  const [activeNiche, setActiveNiche] = useState<string>('Todos');

  // Derive title
  const title = category 
    ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')
    : query 
      ? `Resultados para "${query}"`
      : filterParam === 'new'
        ? 'Novidades & Atualizações'
        : filterParam === 'popular'
          ? 'Mais Acessados'
          : filterParam === 'favs'
            ? 'Meus Favoritos'
            : 'Explorar Acervo';

  // Filter logic
  const filteredItems = useMemo(() => {
    let items = [...MOCK_ITEMS];

    // Filter by route category
    if (category) {
      if (category.toLowerCase() === 'adult') {
         items = items.filter(i => i.isAdult);
      } else {
         // rough match for mock categories
         items = items.filter(i => i.category.toLowerCase().includes(category.toLowerCase().substring(0, 4)));
      }
    }

    // Filter by search query
    if (query) {
      const q = query.toLowerCase();
      items = items.filter(i => 
        i.name.toLowerCase().includes(q) || 
        i.shortDesc.toLowerCase().includes(q) ||
        i.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    // Filter by params
    if (filterParam === 'new') items = items.filter(i => i.isNew);
    if (filterParam === 'popular') items = items.filter(i => i.isPopular);
    // if favs, mock by taking first 2 items
    if (filterParam === 'favs') items = items.slice(0, 2);

    // Filter by active niche tab
    if (activeNiche !== 'Todos') {
      items = items.filter(i => i.niche === activeNiche);
    }

    return items;
  }, [category, query, filterParam, activeNiche]);

  const uniqueNiches = ['Todos', ...Array.from(new Set(MOCK_ITEMS.map(i => i.niche)))];

  return (
    <div className="space-y-6 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight uppercase mb-2">{title}</h1>
        <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Encontre exatamente o que sua operação precisa.</p>
      </div>

      {/* Filters bar */}
      <div className="flex items-center gap-4 overflow-x-auto pb-2 custom-scrollbar">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mr-2 flex-shrink-0">
          <Filter className="w-4 h-4" />
          Nichos:
        </div>
        {uniqueNiches.map(niche => (
          <button
            key={niche}
            onClick={() => setActiveNiche(niche)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex-shrink-0 ${
              activeNiche === niche 
                ? 'bg-brand text-black' 
                : 'bg-white/5 border border-white/5 text-white/50 hover:text-white hover:border-white/20'
            }`}
          >
            {niche}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, delay: i * 0.05 }}>
               <ItemCard item={item} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-border rounded-xl bg-surface/50">
          <h3 className="text-xl font-display font-medium text-primary mb-2">Nenhum resultado encontrado</h3>
          <p className="text-muted">Tente ajustar seus filtros ou termos de pesquisa.</p>
        </div>
      )}
    </div>
  );
}
