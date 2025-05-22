import './Card.css';

export default function Card({nome, imagem, onClick}){
    return(
        <div className="card" onClick={onClick}>
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
        </div>
    )
}

  