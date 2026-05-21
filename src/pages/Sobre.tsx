export default function Sobre() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-6">
      
      <div className="text-center mb-16">
        <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 border border-blue-500/20">
          Entenda a Solução
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
          Sobre o Projeto <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Conexão TdB
          </span>
        </h1>
      </div>
      
      <div className="glass p-8 md:p-12 rounded-3xl space-y-12 relative overflow-hidden border border-white/10">
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>

        <section className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-sm">01</span>
            O Desafio
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            A Turma do Bem (TdB) nos apresentou o desafio de centralizar o alto volume de contatos recebidos. A comunicação fragmentada em múltiplos canais impedia uma gestão eficiente, dificultando a triagem e o acompanhamento dos atendimentos.
          </p>
        </section>
        
        <section className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-sm">02</span>
            Nossa Solução (Full-Stack)
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            O "Conexão TdB" evoluiu para um CRM Social Full-Stack. Unificamos o Front-End em React com um Back-End robusto em Java Spring Boot, garantindo persistência de dados em tempo real e automação total da triagem de pacientes.
          </p>
        </section>

        <section className="relative z-10 bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Arquitetura da Sprint 4</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-slate-300">
              <div><strong className="text-white">Front-End:</strong> React + Vite + TypeScript + Tailwind.</div>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <div><strong className="text-white">Back-End:</strong> Java Spring Boot + REST API (GET, POST, PUT, DELETE).</div>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <div><strong className="text-white">Integração:</strong> Comunicação assíncrona entre o dashboard e o banco de dados.</div>
            </li>
          </ul>
        </section>

        <section className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Roadmap Concluído</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-center p-4 rounded-xl bg-purple-600/20 border border-purple-500/30">
              <div className="font-bold text-purple-400">Sprint 4</div>
              <div className="text-white font-medium">Integração Full-Stack concluída (Status: Deploy Finalizado).</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}