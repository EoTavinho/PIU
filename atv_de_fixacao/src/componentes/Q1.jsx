import { useEffect, useState } from "react";

export default function Q1() {
    const [tema, setTema] = useState('light');
    const handleClick = () => {
        setTema(tema === 'light' ? 'dark' : 'light');

    }

    useEffect(() => {
        if (tema === 'dark'){
            document.body.style.backgroundColor = 'black';
        } else {
            document.body.style.backgroundColor = 'white';
        }
    }, [tema])
    return(
        <button onClick={handleClick}>
            Mudar tema para {tema === 'light' ? 'Escuro' : 'Claro'}
        </button>
    )
}