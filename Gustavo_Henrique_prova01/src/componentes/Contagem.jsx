import { useState } from "react";

export default function Contagem(){
    
    const [valor, setValor] = useState(0) // Definição do useState contendo o valor (valor padrão) e o setValor (o que vai mudar) o "useState(0) é o valor padrão que nesse caso é 0"

    function aumentar(){ // Função que vai fazer o valor aumentar
        setValor(valor + 1) // incrementar o valor com setValor sendo responsável por mudar valor para valor + 1
    }
        
    function diminuir(){ // Função que vai fazer o valor diminuir
        setValor(valor - 1) // decrementar o valor com setValor sendo responsável por mudar valor para valor - 1
    }

    return(
        <>
        <div>
            <button onClick={aumentar}>Aumentar</button> 
        </div>
        <p>{valor}</p>
        <div>
            <button onClick={diminuir}>Diminuir</button>
        </div>
        </>

        // Nessas linhas de cima foi usado botoes com onClick responsaveis por, ao ser clicado, realizar a ação presente na função acima 
    )
}