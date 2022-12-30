// https://www.html6.es/curso/aficiones.txt
import { useState } from 'react';
import "./App.css";

const App = () => {
  const reyesGodos=[
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },{
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },{
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]

  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const cambio = () => {
    setContador(contador + 1);
    console.log("Dentro: " + contador)
    if (contador + 1 >= reyesGodos.length) {
      setContador(0);
    }
    setMensaje(<h2>La aficion principal del rey <span className='rojo'>{reyesGodos[contador].nombre}</span> es <span className='verde'>{reyesGodos[contador].aficion}</span></h2>)
  }
  
  console.log("Fuera: " + contador)

  return (
    <>
    {/* Esto es un comentario dentro del return*/}
    {/* Crear un <div> y un <button> */}  
    <button onClick={() => cambio()}>Ver siguiente</button>
    <div>{mensaje}</div>
    </>
  )
}
export default App;