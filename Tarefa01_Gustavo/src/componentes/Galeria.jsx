import './Galeria.css';
import Card from './Card';

export default function Galeria({ personagens, onSelecionar }) {
  return (
    <div className="galeria">
      {personagens.map((p, i) => (
        <Card
          key={i}
          nome={p.nome}
          imagem={p.imagem}
          onClick={() => onSelecionar(p)}
        />
      ))}
    </div>
  );
}