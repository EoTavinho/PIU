import { useEffect } from "react";

export default function Theme(){
    const [theme, setTheme] = useEffect('light')

    function handleColor(){
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    
    return(
        <div className="tema">
            <button onClick={handleColor}>Altere o tema</button>
        </div>
    )
}