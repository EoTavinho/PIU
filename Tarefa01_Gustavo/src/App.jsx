import { useState } from 'react';
import Galeria from './componentes/Galeria';
import Detalhes from './componentes/Detalhes';
import Tema from './componentes/Tema';
import './App.css';

import neymar from './assets/neymar.jfif';
import cr7 from './assets/cr7.jfif';
import messi from './assets/messi.png';
import raphinha from './assets/raphinha.jfif';
import yamal from './assets/yamal.webp';
import r10 from './assets/r10.jfif';

const personagens = [
  { nome: 'Neymar', imagem: neymar, descricao: 'Príncipe que não virou rei' },
  { nome: 'CR7', imagem: cr7, descricao: 'Melhor jogador do Real' },
  { nome: 'Messi', imagem: messi, descricao: 'GOAT' },
  { nome: 'Raphinha', imagem: raphinha, descricao: 'O injustiçado' },
  { nome: 'Yamal', imagem: yamal, descricao: 'Melhor jogador novo existente' },
  { nome: 'R10', imagem: r10, descricao: 'Melhor driblador da história' }
];

function App() {
  const [tema, setTema] = useState('light')
  const[selecionado, setSelecionado] = useState(null);

  const alternarTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
    document.body.className = tema === 'light' ? 'dark' : 'light';
  };

  return (
    <div className='app'>
      <h1>Galeria de Personagens de fut</h1>
      <Tema tema={tema} alternarTema={alternarTema} />
      <Galeria personagens={personagens} onSelecionar={setSelecionado} />
      <Detalhes personagem={selecionado} />
    </div>
  )
}

export default App
