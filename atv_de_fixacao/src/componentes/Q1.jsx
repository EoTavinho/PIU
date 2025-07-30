import { useState, useEffect } from "react";

export default function Q1(){
    const [tema, setTema] = useState('light')

    useEffect(() => {
        
    })

    return(
        <div>
            <button onClick={() => setTema(tema)}>{tema}</button>
        </div>
    )
}