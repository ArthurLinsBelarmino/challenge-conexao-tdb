export default function Solucao() {
  return (
    <div className="py-20 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
          Nossa <span className="text-purple-500">Solução</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Uma plataforma inteligente e integrada para conectar a Turma do Bem a quem precisa, 
          utilizando arquitetura Full-Stack para máxima eficiência.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 01 */}
        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all group">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 font-bold group-hover:scale-110 transition-transform">
            01
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Gestão de Voluntários</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Dashboard centralizado e integrado ao banco de dados para gestão eficiente de perfis e prontuários digitais.
          </p>
        </div>

        {/* Card 02 */}
        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all group">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 font-bold group-hover:scale-110 transition-transform">
            02
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Triagem Inteligente</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            API Java processando as solicitações com segurança, garantindo que os casos urgentes recebam prioridade imediata.
          </p>
        </div>

        {/* Card 03 */}
        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all group">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 font-bold group-hover:scale-110 transition-transform">
            03
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Portal do Paciente</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Interface intuitiva conectada ao servidor para que pacientes consultem o status real de seus atendimentos.
          </p>
        </div>
      </div>

      <div className="mt-16 glass p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] -z-10" />
        <h2 className="text-2xl font-bold mb-4 text-white">Integração Full-Stack Real</h2>
        <p className="text-slate-400 leading-relaxed">
          Nesta Sprint 4, implementamos a conexão definitiva com nosso Back-End Java. Agora, o sistema não é apenas um protótipo, 
          mas uma ferramenta escalável que garante a integridade dos dados, segurança nas transações de informação e 
          confiabilidade operacional para a ONG Turma do Bem.
        </p>
      </div>
    </div>
  );
}