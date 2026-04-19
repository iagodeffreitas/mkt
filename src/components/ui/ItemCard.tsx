import { AcervoItem, formatType } from '@/data/mock';
import { Card as CardContainer, CardContent } from './CardBase';
import { Badge } from './Badge';
import { ExternalLink, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

interface ItemCardProps {
  item: AcervoItem;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <CardContainer className="group overflow-hidden flex flex-col hover:border-brand/50 transition-all">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-brand/10 to-transparent">
        {item.isAdult ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md z-10 p-6 text-center">
             <Lock className="w-8 h-8 text-red-500 mb-2" />
             <p className="text-xs font-black text-white uppercase tracking-tighter">Conteúdo Restrito +18</p>
             <p className="text-[9px] text-white/40 mt-1">Acesso apenas para membros.</p>
          </div>
        ) : null}
        <img 
          src={item.thumbnail} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3 flex flex-wrap gap-2 z-20">
          {item.isNew && <Badge variant="new">Novo</Badge>}
          {item.isPopular && <Badge variant="default">Popular</Badge>}
        </div>
      </div>
      
      <CardContent className="p-4 flex flex-col flex-1">
        <p className="text-[10px] text-brand font-bold mb-1 uppercase tracking-widest">{item.category}</p>
        
        <h3 className="font-bold text-sm mb-2 line-clamp-1" title={item.name}>
          {item.name}
        </h3>
        
        <p className="text-white/40 text-[11px] font-medium line-clamp-2 mb-4 flex-1">
          {item.shortDesc}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">{item.niche}</Badge>
          <Badge variant="secondary">{formatType(item.type)}</Badge>
        </div>

        <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
          <Link to={`/app/item/${item.id}`} className="flex-1">
            <Button variant="outline" className="w-full h-9 text-xs">
              Detalhes
            </Button>
          </Link>
          <a href={item.driveLink} target="_blank" rel="noopener noreferrer" className="flex-[2]">
            <Button variant="default" className="w-full h-9 text-xs gap-1.5 flex items-center justify-center font-black">
              <ExternalLink className="w-3.5 h-3.5" />
              ABRIR
            </Button>
          </a>
        </div>
      </CardContent>
    </CardContainer>
  );
}
