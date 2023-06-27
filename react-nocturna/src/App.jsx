import React from 'react'
import './app.css'
import { Button , Input } from './componentes'


const App = () => {
  const saludar = () =>{
    alert("Hola")
}
  const despedida = () =>{
    alert ("Adios")
  }

  return (
    <>
    <div>

      <h1>Hola desde React</h1>

    </div>
    <div>
      <Button funcion= {saludar} />
      <Button funcion= {despedida} />
      <Input/>
    </div>
    </>
  )
}

export default App