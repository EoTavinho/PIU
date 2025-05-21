import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChangeBackground from './ChangeBackground.jsx'
import MudarCor from './MudarCor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <MudarCor/>
  </StrictMode>,
)
