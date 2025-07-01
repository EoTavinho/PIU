
import { useState } from 'react'
import './ListaDeTarefas.css'

export default function ListaDeTarefas(){
    const [tarefa, setTarefa] = useState('')
    const [lista, setLista] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLista([...lista, tarefa])
        setTarefa('')

    }

    const handleClear = () => {
        setLista([])
    }

    return(
        <div>
            <h2>Gerenciador de Tarefas</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} placeholder='Adicione uma Tarefa' /> 
                </label>
                <p>Tarefa</p>
                <input type="submit" />
            </form>

            <button onClick={handleClear}>Limpar</button>
            
            <ul>
                {lista.map((item) =>
                <li>{item}</li>
                )}
            </ul>

        </div>
    )

}