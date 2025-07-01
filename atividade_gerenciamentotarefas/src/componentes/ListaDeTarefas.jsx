import React, { useState } from "react";

function ListaDeTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState("");

    const adicionarTarefa = () => {
        if (novaTarefa.trim() === "") return;
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa("");
    };

    const removerTarefa = (index) => {
        setTarefas(tarefas.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <input
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder="Digite uma tarefa"
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>
                        {tarefa}
                        <button onClick={() => removerTarefa(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDeTarefas;