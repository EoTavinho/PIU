import {carros} from './dados.js'// Puxa a lista de carros do arquivo dados.js

export default function ModelCores(){
    return(
        <div>
            <ul>
                {carros.map(carro =>(
                    <li>{carro.modelo}</li> //mapeia cada carro com base no modelo e coloca cada carro numa li
                ))}
            </ul>
        </div>
    )
}