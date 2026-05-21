export const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950/80 py-12 backdrop-blur-md" aria-label="Rodapé do site">
      <div className="container mx-auto px-6 text-center">
        <nav className="mb-6 flex justify-center gap-6 text-sm text-slate-400" aria-label="Links rápidos">
          <a href="/sobre" className="hover:text-purple-400 transition-colors">Sobre</a>
          <a href="/contato" className="hover:text-purple-400 transition-colors">Contato</a>
          <a href="/faq" className="hover:text-purple-400 transition-colors">FAQ</a>
        </nav>

        <p className="text-slate-500 text-sm tracking-wide">
          &copy; {anoAtual} <span className="text-purple-500 font-bold">TechSmile Solutions</span> - Projeto Challenge FIAP 1TDS. 
          <br />
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};