import './Tavinho.css'

function Tavinho(){
    const label = 'Não clique aqui'
    function handleClick(){
        return(
            alert('TEIMOSO DUKRLH')
        )
    }
    return(
        <>
        <div>
            <h1>Digai Usuario</h1>
            <button onClick={handleClick}>{label}</button>
        </div>
        </>
    )
}

export default Tavinho