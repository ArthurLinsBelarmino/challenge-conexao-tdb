import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { listaEquipe } from './Integrantes';

type Membro = typeof listaEquipe[0];

export default function IntegranteDetalhe() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  
  const [membro, setMembro] = useState<Membro | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const integranteEncontrado = listaEquipe.find(m => String(m.id) === String(id));
    
    setTimeout(() => {
      setMembro(integranteEncontrado || null);
      setCarregando(false);
    }, 300);
  }, [id]);

  if (carregando) {
    return <div className="text-center py-20 text-slate-500 animate-pulse">Carregando dados...</div>;
  }

  if (!membro) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Ops! Integrante não encontrado.</h2>
        <p className="text-slate-400 mb-8">Parece que este perfil não existe na nossa equipe.</p>
        <button 
          onClick={() => navigate('/integrantes')} 
          className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-500 transition-all font-bold shadow-lg shadow-purple-900/20"
        >
          Voltar para Equipe
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-20">
      <div className="glass p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden border border-white/10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full pointer-events-none"></div>

        <div className="relative">
           <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 blur-md opacity-50" />
           <img 
             src={membro.foto} 
             alt={`Foto de ${membro.nome}`} 
             className="relative w-48 h-48 rounded-full object-cover border-2 border-white/20 shadow-2xl z-10" 
           />
        </div>
        
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-4xl font-extrabold text-white mb-2">{membro.nome}</h1>
          <p className="text-xl text-purple-400 font-mono mb-8">RM: {membro.rm}</p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <a href={membro.github} target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white py-3 px-8 rounded-xl font-bold hover:bg-white/20 transition-all shadow-lg">
              GitHub
            </a>
            <a href={membro.linkedin} target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white py-3 px-8 rounded-xl font-bold hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/30">
              LinkedIn
            </a>
          </div>

          <button 
            onClick={() => navigate(-1)} 
            className="text-slate-400 font-semibold hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2"
          >
            <span>←</span> Voltar
          </button>
        </div>
      </div>
    </div>
  );
}