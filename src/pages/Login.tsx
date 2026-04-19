import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { FormEvent } from 'react';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/app');
  };

  return (
    <div className="min-h-screen relative flex bg-background items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, white 0%, transparent 50%)' }} />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8 flex flex-col items-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded bg-brand flex items-center justify-center font-bold text-black border-none text-xl">A</div>
            <span className="font-bold text-xl tracking-tight text-white uppercase">Acervo <span className="text-brand">Pro</span></span>
          </Link>
          <h1 className="text-2xl font-black mb-2 text-white uppercase tracking-tight">Acesso Assinante</h1>
          <p className="text-white/40 text-sm font-medium uppercase tracking-widest">Digite seus dados</p>
        </div>

        <div className="bg-[#161618] border border-white/5 p-8 rounded-2xl shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">E-mail</label>
              <input 
                id="email" 
                type="email" 
                placeholder="seu@email.com" 
                required
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-brand text-white placeholder:text-white/20 transition-all text-sm"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Senha</label>
                <a href="#" className="text-[10px] font-bold text-brand hover:text-brand-hover tracking-widest uppercase transition-colors">Esqueci</a>
              </div>
              <input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                required
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-brand text-white placeholder:text-white/20 transition-all text-sm"
              />
            </div>
            <Button type="submit" className="w-full mt-2 h-12 rounded-lg font-black tracking-widest text-[#0A0A0B]">
              Entrar
            </Button>
          </form>

          {/* Dev Mode Action */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <Button 
              type="button"
              variant="outline" 
              onClick={() => navigate('/app')} 
              className="w-full h-12 rounded-lg font-black tracking-widest text-[10px] border-dashed border-white/20 text-white/40 hover:text-white hover:border-white/40"
            >
              Login DV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
