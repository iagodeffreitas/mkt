import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_ITEMS, formatType } from '@/data/mock';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, ExternalLink, Calendar, Folder, Tag, Lock } from 'lucide-react';

export default function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = MOCK_ITEMS.find(i => i.id === id);

  if (!item) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Item não encontrado</h2>
        <Button variant="outline" onClick={() => navigate('/app')}>Voltar ao início</Button>
      </div>
    );
  }

  // Get related items
  const related = MOCK_ITEMS.filter(i => i.category === item.category && i.id !== item.id).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors cursor-pointer">
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </button>

      <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-xl">
        <div className="relative aspect-video sm:aspect-[21/9] bg-surface-elevated border-b border-border">
          {item.isAdult ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 backdrop-blur-xl z-10 text-muted p-4 text-center">
              <Lock className="w-12 h-12 mb-4 opacity-50" />
              <span className="text-xl font-display font-bold text-primary mb-2">Conteúdo +18</span>
              <span className="text-sm max-w-md opacity-80">Este material contém táticas, cópias ou estruturas voltadas para nichos adultos ou black, exigindo discricionariedade.</span>
            </div>
          ) : null}
          <img src={item.thumbnail} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute top-4 left-4 flex gap-2 z-20">
             {item.isNew && <Badge variant="default" className="text-sm px-3 py-1 bg-primary text-background">Novo Material</Badge>}
             {item.isPopular && <Badge variant="secondary" className="text-sm px-3 py-1 bg-brand text-white border-none">Alta Demanda</Badge>}
          </div>
        </div>

        <div className="p-6 md:p-10">
          <div className="mb-6">
            <h1 className="font-display text-3xl sm:text-4xl font-black mb-4 text-primary leading-tight uppercase">{item.name}</h1>
            <p className="text-lg text-white/40 font-medium">{item.shortDesc}</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-md border border-white/10 text-white">
              <Folder className="w-4 h-4 text-brand" />
              <span>{item.category}</span>
              <span className="text-white/30">/</span>
              <span className="text-white/50">{formatType(item.type)}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-md border border-white/10 text-white">
              <Tag className="w-4 h-4 text-brand" />
              <span>{item.niche}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-md border border-white/10 text-white/50">
              <Calendar className="w-4 h-4" />
              <span>Att {new Date(item.updatedAt).toLocaleDateString('pt-BR')}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-[10px] font-bold mb-3 uppercase tracking-widest text-white/40">Sobre o Material</h3>
                <div className="prose prose-invert max-w-none text-white/60 font-medium">
                  <p>{item.description}</p>
                  <p>Este material foi projetado para economizar suas horas de trabalho e servir como uma base sólida e testada para sua operação digital.</p>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-bold mb-3 uppercase tracking-widest text-white/40">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <Badge variant="outline" key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#161618] border border-white/5 rounded-2xl p-6 text-center shadow-inner">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-brand" />
                </div>
                <h4 className="font-bold text-lg mb-2">Acesso Imediato</h4>
                <p className="text-xs text-white/40 mb-6 font-medium">O material está hospedado no Google Drive. Faça uma cópia para editar.</p>
                
                <a href={item.driveLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button size="lg" className="w-full text-xs font-black shadow-[0_0_20px_-5px_theme(colors.brand)]">
                    Abrir no Drive
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="pt-10 border-t border-white/5 mt-10">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/60">Outros materiais relacionados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map(rel => (
              <div key={rel.id} className="bg-[#161618] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-brand/50 transition-colors">
                 <div className="text-[10px] uppercase font-bold tracking-widest text-brand mb-1">{rel.category}</div>
                 <h4 className="font-bold text-sm mb-2">{rel.name}</h4>
                 <p className="text-xs font-medium text-white/40 line-clamp-2 mb-4">{rel.shortDesc}</p>
                 <Button variant="outline" size="sm" onClick={() => navigate(`/app/item/${rel.id}`)} className="mt-auto w-full border-white/10">Ver detalhes</Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
