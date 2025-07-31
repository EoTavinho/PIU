import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListApi from './componentes/ListApi.jsx'
import ListarPosts from './componentes/ListarPosts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ListApi/> */}
    <ListarPosts/>
  </StrictMode>,
)
