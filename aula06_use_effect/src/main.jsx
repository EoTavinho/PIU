import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CountClicks from './componentes/CountClicks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountClicks/>
  </StrictMode>,
)
