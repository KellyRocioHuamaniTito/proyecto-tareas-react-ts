import React from 'react'
import ReactDOM from 'react-dom/client'
//importamos los estilos
import './styles.css'
import { TodoApp } from './components/TodoApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoApp></TodoApp> 
  
  </React.StrictMode>,
)
