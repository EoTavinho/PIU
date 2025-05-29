import './Dropdown.css';

const menu = [
  {
    titulo: 'Esportes',
    opcoes: ['Futebol', 'Basquete', 'Tênis'],
  },
  {
    titulo: 'Músicas',
    opcoes: ['Rock', 'Pop', 'Jazz'],
  },
  {
    titulo: 'Filmes',
    opcoes: ['Ação', 'Comédia', 'Terror'],
  }
];

export default function DropdownMenu() {
  return (
    <nav className="menu">
      {menu.map((categoria) => (
        <div key={categoria.titulo} className="dropdown">
          <button className="dropbtn">{categoria.titulo}</button>
          <div className="dropdown-content">
            {categoria.opcoes.map((opcao) => (
              <a key={opcao} href="#">{opcao}</a>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
