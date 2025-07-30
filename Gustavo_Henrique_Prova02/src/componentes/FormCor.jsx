import { useState, useEffect } from "react";


export default function FormCor() {
    const [cor, setCor] = useState('')
    const [select, setSelect] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        setCor(select)
    }

    const handleColor = () =>{
        
        if (select === 'blue') {
            document.body.style.backgroundColor = 'blue'
        } else {
            document.body.style.backgroundColor = 'red'
        }
    }
    useEffect(() => {
        handleColor()
    }, [select])
    
    return(
        <div>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
                <label>Digite seu nome: </label>
                <input 
                    type="text"
                    value={nome}
                    onChange={(e) => e.target.value}
                    placeholder="Nome"
                 />
                
                <label>Selecione uma opção de cor:
                    <select name="selecione" onChange={(e) => setSelect(e.target.value)}>
                        <option value="azul">Azul</option>
                        <option value="vermelho">Vermelho</option>
                    </select>
                </label>
                
                <button type='submit' onClick={handleColor}>Enviar</button>

        
            </form>
        </div>
    )
}