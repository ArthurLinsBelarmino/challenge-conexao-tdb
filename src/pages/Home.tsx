import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <span className="mb-4 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400 border border-purple-500/20">
        TechSmile Solutions - Sprint 4
      </span>
      
      <h1 className="mb-6 max-w-4xl text-center text-5xl font-extrabold tracking-tight md:text-7xl">
        Conectando Sorrisos com <br />
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Tecnologia e Empatia
        </span>
      </h1>

      <p className="mb-10 max-w-2xl text-center text-lg text-slate-400 leading-relaxed">
        CRM inteligente integrado ao Back-End para otimização total da triagem de pacientes da ONG Turma do Bem.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link 
          to="/dashboard" 
          className="rounded-full bg-purple-600 px-8 py-4 font-bold shadow-lg shadow-purple-900/40 transition-all hover:scale-105 hover:bg-purple-500 text-white flex items-center justify-center"
        >
          Acessar Dashboard
        </Link>
        
        <Link 
          to="/solucao" 
          className="glass rounded-full px-8 py-4 font-bold transition-all hover:bg-white/10 text-white flex items-center justify-center border border-white/10"
        >
          Explorar Solução
        </Link>
      </div>
    </div>
  );
}