import { useState } from "react";

export default function ListaDeTarefas() {
    const [tarefas, setTarefas] = useState('');
    const [lista, setLista] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica apenas se o campo está vazio
        if (tarefas === '') return;

        const novaTarefa = {
            descricao: tarefas,
            status: 'pendente'
        };

        setLista([...lista, novaTarefa]);
        setTarefas('');
    };

    const mudarStatus = (index, novoStatus) => {
        const novaLista = lista.map((item, i) => {
            if (i === index) {
                return { ...item, status: novoStatus };
            }
            return item;
        });
        setLista(novaLista);
    };

    return (
        <div>
            <h2>Gerenciador de Tarefas</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={tarefas} 
                    onChange={(e) => setTarefas(e.target.value)} 
                />
                <button type="submit">Adicionar</button>
            </form>

            <ul>
                {lista.map((item, index) => (
                    <li key={index}>
                        {item.descricao} - <strong>{item.status}</strong>
                        <div>
                            <select value={item.status} onChange={(e) => mudarStatus(e.target.value)}>
                                <option value="Pendente" >Pendente</option>
                                <option value="Realizada" >Realizada</option>
                                <option value="Não Realizada">Não Realizada</option>
                            </select>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}




// import { useState } from "react";

// export default function ListaDeTarefas(){
//     const [tarefas, setTarefas] = useState('')
//     const [lista, setLista] = useState([])
//     const [estado, setEstado] = useState('Não realizada')

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setLista([...lista, tarefas])
//         setTarefas('')
//     } 

//     const handleStatus(){
        
//     }

//     return(

//         <div>
//             <h2>Gerenciador de Tarefas</h2>

//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={tarefas} onChange={(e) => setTarefas(e.target.value)}/>
//                 <button type="submit">Enviar</button>
//             </form>

//             <ul>
//                 {lista.map((item) =>
//                 <li>{item}</li>
//                 )}
//             </ul>
//         </div>
//     )

// }