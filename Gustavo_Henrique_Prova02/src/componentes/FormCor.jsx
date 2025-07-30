import { useState, useEffect } from "react";


export default function FormCor() {
    const [cor, setCor] = useState('light')
    const [select, setSelect] = useState()
    const [nome , setNome] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        setCor(cor)
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
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome"
                 />
                
                <label>Selecione uma opção de cor:
                    <select name="selecione" onChange={(e) => setSelect(e.target.value)}>
                        <option value="azul">Azul</option>
                        <option value="vermelho">Vermelho</option>
                    </select>
                </label>
                
                <button type='submit' onClick={handleColor}>Enviar</button>

                <p>{nome}</p>
                <p>{select}</p>

            </form>
        </div>
    )
}