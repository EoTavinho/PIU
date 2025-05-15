import { useState } from "react";
import images from '/images.jfif'
function Imagem(){

    let [imagem, setImagem] = useState()

    return(
        <>
        <div>
            <h1>N aperte no botao</h1>
            <button onClick={() => setImagem(imagem)}>Não Clique aqui</button>
            <img src={imagem} alt="neymaaaaaaaaa" />
        </div>
        </>
        
    )

}

export default Imagem