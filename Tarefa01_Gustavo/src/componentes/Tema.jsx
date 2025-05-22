import './Tema.css'

export default function Tema({ tema, alternarTema }){
    
    return(
        <button className='tema' onClick={alternarTema}>
            Mudar para {tema === 'light' ? 'Modo Escuro' : 'Modo Claro'}
        </button>
    )
}