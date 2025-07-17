import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListarDados from './componentes/ListarDados.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListarDados/>
  </StrictMode>,
)
