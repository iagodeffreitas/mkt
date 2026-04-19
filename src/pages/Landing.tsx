import { Link } from 'react-router-dom';
import { MOCK_ITEMS, CATEGORIES } from '../data/mock';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle2, Lock, Play, Shield, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-brand/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-brand flex items-center justify-center text-black font-bold text-sm">A</div>
            <span className="font-display font-bold text-lg tracking-tight uppercase">Acervo <span className="text-brand">Pro</span></span>
          </div>
          <Link to="/login">
            <Button variant="white" className="rounded-full px-6 tracking-widest text-[#0A0A0B]">Login</Button>
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-24 px-4 relative overflow-hidden">
          {/* Subtle gradient background element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight uppercase">
                Tenha acesso a uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-yellow-300">biblioteca completa</span> para acelerar sua estrutura no marketing
              </h1>
              <p className="text-lg md:text-xl text-white/40 max-w-3xl mx-auto mb-12 font-medium">
                Funis, páginas, templates, automações, criativos, ferramentas e materiais organizados para você adaptar, vender, divulgar e prestar serviços com mais velocidade.
              </p>
            </motion.div>

            {/* VSL Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-4xl mx-auto aspect-video bg-surface-elevated rounded-xl border border-border shadow-2xl relative flex items-center justify-center overflow-hidden mb-10 group"
            >
              <img src="https://picsum.photos/seed/vsl/1280/720" alt="Video cover" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20" />
              <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center pl-1 shadow-xl hover:scale-105 transition-transform z-10 cursor-pointer">
                <Play className="w-8 h-8 text-background" />
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Oferta por tempo limitado
              </div>
              <a href="#oferta">
                <Button size="lg" className="h-auto flex-col py-4 px-12 text-lg shadow-[0_0_60px_-10px_theme(colors.brand)] font-black uppercase text-black cursor-pointer">
                  <div className="flex items-center gap-2">
                    Quero acessar o acervo
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] opacity-70 tracking-widest mt-1.5 flex items-center gap-2">
                    <span className="line-through">De R$ 197</span>
                    <span>por apenas R$ 47</span>
                  </div>
                </Button>
              </a>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 mt-2">
                <Shield className="w-4 h-4" />
                <span>Acesso organizado, materiais prontos</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-surface-card border-y border-white/5">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-4 text-white">O que vem dentro do acervo</h2>
              <p className="text-white/40 font-medium text-lg uppercase tracking-widest">Um arsenal completo, constantemente atualizado.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CATEGORIES.map((cat, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#111114] border border-white/5 flex items-center gap-3">
                  {cat === 'Conteúdos +18' ? <Lock className="w-5 h-5 text-red-500" /> : <CheckCircle2 className="w-5 h-5 text-brand" />}
                  <span className={`text-sm font-bold uppercase tracking-widest ${cat === 'Conteúdos +18' ? 'text-red-500' : 'text-white'}`}>{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & How to use */}
        <section className="py-24 bg-surface">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-black mb-6 uppercase tracking-tight leading-tight">Como usar o acervo para gerar oportunidades no digital</h2>
                <div className="space-y-6">
                  {[
                    { title: "Afiliados", desc: "Use funis validados e criativos de alta conversão como base para suas campanhas." },
                    { title: "Prestadores de Serviço", desc: "Economize dezenas de horas usando automações e páginas pré-construídas." },
                    { title: "Produtores", desc: "Inspire-se em copies e estruturas testadas para lançar seu próximo produto." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded bg-[#111114] border border-white/5 flex items-center justify-center flex-shrink-0 mt-1">
                        <Star className="w-5 h-5 text-brand" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 uppercase tracking-widest">{item.title}</h3>
                        <p className="text-white/40 text-sm font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface-elevated to-surface rounded-2xl border border-border shadow-2xl p-8 flex flex-col gap-4">
                   {/* Abstract dashboard graphic representation */}
                   <div className="flex gap-2 mb-4">
                     <div className="w-3 h-3 rounded-full bg-border" />
                     <div className="w-3 h-3 rounded-full bg-border" />
                     <div className="w-3 h-3 rounded-full bg-border" />
                   </div>
                   <div className="h-8 bg-border/50 rounded-md w-1/3 mb-4" />
                   <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-border/30 rounded-lg" />
                      <div className="h-24 bg-border/30 rounded-lg" />
                      <div className="col-span-2 h-32 bg-border/20 rounded-lg mt-4" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing / Offer Section */}
        <section id="oferta" className="py-24 bg-[#0A0A0B] relative border-t border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5a22]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">Liberte sua operação</h2>
              <p className="text-white/40 font-bold uppercase tracking-widest text-sm">Acelere com tudo pronto para usar</p>
            </div>

            {/* Configured Pricing Card */}
            <div className="relative w-full max-w-[380px] mx-auto">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A0A0B] border border-[#ff5a22] text-[#ff5a22] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-10 whitespace-nowrap shadow-[0_0_20px_-5px_#ff5a22]">
                Tempo Limitado
              </div>

              <div className="bg-[#111114] border border-white/5 rounded-[2rem] p-8 pt-10 shadow-2xl relative overflow-hidden transition-all hover:border-[#ff5a22]/30">
                <h3 className="text-2xl font-black text-white tracking-tight">Pro</h3>
                <p className="text-sm text-white/40 font-medium mt-2">Para rodar operacao com consistencia</p>

                <div className="mt-8 mb-2 flex flex-col">
                  <span className="text-sm text-white/30 font-bold line-through mb-1">De R$ 197,00</span>
                  <div className="flex items-baseline gap-1 -ml-1">
                    <span className="text-6xl font-black text-white tracking-tighter">R$47</span>
                    <span className="text-2xl font-bold text-white/50">,00</span>
                  </div>
                </div>
                <p className="text-xs text-white/40 font-medium">pagamento único · acesso imediato a tudo</p>

                <div className="mt-8 mb-5">
                  <p className="text-[#ff5a22] font-bold text-sm tracking-wide">Acesso Vitalício</p>
                </div>
                
                <div className="h-px bg-white/5 w-full mb-6" />

                <ul className="flex flex-col gap-4 text-sm font-medium text-white/70">
                  <li className="flex items-start gap-4">
                    <span className="text-[#ff5a22] font-black mt-0.5">+</span>
                    <span>Biblioteca premium de templates</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#ff5a22] font-black mt-0.5">+</span>
                    <span>Funis, automações e criativos</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#ff5a22] font-black mt-0.5">+</span>
                    <span>Integração via Google Drive</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#ff5a22] font-black mt-0.5">+</span>
                    <span>Acesso vitalício às novidades</span>
                  </li>
                </ul>

                <Link to="/login" className="block mt-10">
                  <button className="w-full py-4 rounded-xl font-bold text-white bg-[#ff5a22] hover:bg-[#e04a11] transition-all text-sm border-none cursor-pointer">
                    Começar com Pro
                  </button>
                </Link>
              </div>
            </div>
            
            <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mt-16 max-w-2xl mx-auto leading-relaxed border p-4 rounded-xl border-white/5 text-center">
              Aviso de uso responsável: Os resultados dependem da aplicação de cada pessoa. O acervo fornece materiais base e educacionais que devem ser adaptados ao seu contexto e produto. Itens de conteúdos adultos (+18) são classificados rigorosamente.
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Acervo Pro Marketing Digital. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
