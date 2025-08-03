import { useState, useEffect } from "react";


export default function FormCor() {
    const [cor, setCor] = useState(null)
    const [select, setSelect] = useState('padrao')
    const [nome , setNome] = useState('')
    const [mostrarDados, setMostrarDados] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setCor(select)
        setMostrarDados(true)
        setSelect('padrao')
        
    }

    
    useEffect(() => {
      if (cor === 'blue') {
            document.body.style.backgroundColor = 'blue'
        } else if (cor === 'padrao') {
            document.body.style.backgroundColor = ''
        } else if (cor === 'red') {
            document.body.style.backgroundColor = 'red'
        }
    }, [cor])
    
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
                 /> <br /> <br />
                 
                <label>Selecione uma opção de cor:
                    <select name="selecione" onChange={(e) => setSelect(e.target.value)}>
                        <option value="padrao">{select}</option>
                        <option value="blue">Azul</option>
                        <option value="red">Vermelho</option>
                    </select>
                </label>
            
                <button type='submit'>Enviar</button>


            </form>

            {mostrarDados && (
                <div>
                    <p>{nome}</p>
                    <p>{cor}</p>
                </div>
            )}

        </div>
    )
}