import { Link } from 'react-router-dom';
import { CardIntegrante } from '../components/CardIntegrante';
import arthurFoto from '../assets/Arthur.jpeg';
import henriqueFoto from '../assets/henrique.jpeg';
import raphaelFoto from '../assets/Raphael.jpeg';

export const listaEquipe = [
  {
    id: 'arthur',
    nome: 'Arthur Lins Belarmino',
    rm: '566845',
    github: 'https://github.com/ArthurLinsBelarmino',
    linkedin: 'https://www.linkedin.com/in/arthur-lins-belarmino-3b1369328/',
    foto: arthurFoto
  },
  {
    id: 'henrique',
    nome: 'Henrique Moreno',
    rm: '568130',
    github: 'https://github.com/henrique477',
    linkedin: 'https://www.linkedin.com/in/henrique-pav%C3%A3o-849407251/',
    foto: henriqueFoto
  },
  {
    id: 'raphael',
    nome: 'Raphael Mendonça',
    rm: '568346',
    github: 'https://github.com/Raphael-Sinelli',
    linkedin: 'https://www.linkedin.com/in/raphael-sinelli-675310321',
    foto: raphaelFoto
  }
];

export default function Integrantes() {
  return (
    <div className="py-20 px-6">
      <h1 className="text-center text-4xl md:text-6xl font-black mb-16 tracking-tighter text-white">
        Nossa <span className="text-purple-500">Equipe</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {listaEquipe.map(membro => (
          <Link to={`/integrantes/${membro.id}`} key={membro.id} className="block group">
            <CardIntegrante 
              nome={membro.nome}
              rm={membro.rm}
              foto={membro.foto}
              github={membro.github}
              linkedin={membro.linkedin}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}