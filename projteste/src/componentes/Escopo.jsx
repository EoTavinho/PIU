import './Escopo.css'

function Escopo(){
    const label = "Clique Aqui"
    function handleClick(){
        return(
            alert("Alerta")
        )
    }
    return(
        <>
        <div>
            <h2>Teste de componente</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia, reiciendis facilis tempore id accusantium at ullam iusto consequatur iure temporibus recusandae repudiandae enim beatae natus vel molestias inventore aliquam!</p>
        </div>
        <div>
            <button onClick={() => console.log('BLa')}>{label}</button>
        </div>
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>
        </>
    )
}

export default Escopo