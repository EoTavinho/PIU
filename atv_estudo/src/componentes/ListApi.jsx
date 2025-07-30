import { useState, useEffect } from "react";

export default function ListApi(){
    const [userId, setUserId] = useState('')
    const [albuns, setAlbuns] = useState([])

    useEffect(() => {
        const buscarAlbuns = async () => {
            if (userId >= 1 && userId <= 10) {
                const resposta = await fetch('https://jsonplaceholder.typicode.com/albums')
                const dados = await resposta.json();
                const filtrados = dados.filter(album => album.userId === Number(userId))
                setAlbuns(filtrados);

            } else {
                setAlbuns([])
            }
        };

        buscarAlbuns();
    },[userId])
    
    return (
        <div>
            <h1>Listar UserId</h1>
            <h2>Selecione qual User ID voce quer buscar:</h2>
            <form >
                <input 
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)} placeholder="Digite um número de 1 a 10" />

            </form>
            <div>
                <ul>
                    {albuns.map(album => (
                        <li key={album.id}>{album.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}