//para generar el codigo: tsrafc


//import React from 'react'

//type Props = {}
import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {

  const [nuevaTarea,setNuevaTarea] =useState<string>('')
  const [listaTareas,setListaTareas] =useState<string[]>([])

  const handleAddTask=()=>{
    if(nuevaTarea.trim()==='')return
    setListaTareas(tareaAnteriores =>[...tareaAnteriores,nuevaTarea])
    setNuevaTarea('')
  }

  const handleBorrarTarea=(index:number)=>{
    //filtra todas las tareas que son distintas del indice que le pase
    setListaTareas(tareas=> tareas.filter((_,i)=> i!==index)) 


  }

  return (
    <div>
        <h1>Lista de tareas</h1>
        <div className="flex">
            <input 
            type="text"
            value={nuevaTarea}
            onChange={(e)=>setNuevaTarea(e.target.value)}
            placeholder="Nueva Tarea"
            />
            <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
        <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </div>


  )
}