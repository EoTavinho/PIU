import { useState, useEffect } from "react";
import './ListarDados.css'
export default function ListarDados(){
    const [dados, setDados] = useState([]);
    const [dadosCarregados, setDadosCarregados] = useState(false);
    const [carregarNome, setCarregarNome] = useState(false);
    const [carregarUsername, setCarregarUsername] = useState(false);
    const [carregarCidade, setCarregarCidade] = useState(false);

    useEffect(() => {
        const carregarDados = async () => {
            try {
                const resposta = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await resposta.json();
                setDados(data);
            } catch (erro) {
                console.error('Erro ao buscar dados:'. erro)
            }
        };

        if (dadosCarregados) {
            carregarDados();
        }

    }, [dadosCarregados]);

    const carregarTabela = (tipo) => {
        if (!dadosCarregados) setDadosCarregados(true);

        if (tipo === 'nome') setCarregarNome(true);
        if (tipo === 'username') setCarregarUsername(true);
        if (tipo === 'cidade') setCarregarCidade(true);
    };


    return(
        <div>
            <h1>Lista de Dados de Usuários</h1>
            <div>
                <ul>
                    {dados.map(dado => (
                        <li key={dado.id}>{dado.name}</li>
                        ))}
                    <button onClick={() =>  carregarTabela('nome')}>Carregar Nomes</button>
                </ul>
            </div>
            
            <ul className="username">
                {dados.map(dado => (
                    <li key={dado.id}>{dado.username}</li>
                ))}
                <button onClick={() =>  carregarTabela('username')}>Carregar Username</button>
            </ul>
            <ul className="cidade">
                {dados.map(dado => (
                    <li key={dado.id}>{dado.address.city}</li>
                ))}
                <button onClick={() =>  carregarTabela('cidade')}>Carregar Cidade</button>
            </ul>
        </div>
    )
};
