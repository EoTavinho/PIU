import { useState, useEffect } from 'react';

export default function ListaPosts() {
  const [posts, setPosts] = useState([]);
  const [carregar, setCarregar] = useState(false); // controla quando buscar

  // useEffect que roda toda vez que 'carregar' for alterado
  useEffect(() => {
    if (carregar) {
      const buscarPosts = async () => {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const dados = await resposta.json();
        setPosts(dados);
        setCarregar(false); // reseta o estado para evitar requisições infinitas
      };

      buscarPosts();
    }
  }, [carregar]);

  const handleClick = () => {
    setCarregar(true); // aciona o useEffect
  };

  return (
    <div>
      <h2>Lista de Posts</h2>
      <button onClick={handleClick}>Atualizar</button>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong><br />
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
