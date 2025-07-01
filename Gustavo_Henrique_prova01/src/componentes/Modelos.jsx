import {carros} from "./dados.js";

export default function Modelos(){

    const selecionados = carros.filter(selecionado => selecionado.modelo === selecionado.ano > 2019 )
    // defini uma constante chamada selecionados onde filtra dentro da lista carros modelos onde o ano é maior q 2019

    return(
        <div>
            <ul>
                {selecionados.map(selecionado => (
                    <li key={selecionado.id}>
                        <p>O modelo é {selecionado.modelo} e seu ano é {selecionado.ano}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
    // Pega "selecionados" ja filtrado e mapeia selecionando os carros por id e mostrando o modelo e o ano
}