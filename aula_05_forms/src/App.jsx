import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState(""); // Estado para armazenar o nome
  const [ano, setAno] = useState("")

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Digite seu nome:</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu nome aqui"
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <p>Olá, {name || "visitante"}!</p>
      <input type="text" value={ano} onChange={(e) => setAno(e.target.value)} placeholder='digite o ano q voce nasceu'/>
      <p>O ano q voce nasceu foi: {ano} </p>
    </div>
  );
}

export default App
