import { useState } from 'react'
import './App.css'

function App() {

  // Valo inicial de la variable nombre vacio
  const [nombre, setNombre] = useState('Fernando');
  
  // const cambiar = () => {
  //   // Cambiamos el valor de la variable nombre
  //   setNombre('Bob Esponja');
  //   console.log(nombre);
    
  // }

  return (
    <div className="App">
      <h1>Hola, me llamo {nombre}</h1>
      {/* <button onClick={cambiar}>Cambiar Nombre</button> */}
      <button onClick={() => setNombre('Bob Esponja')}>Cambiar Nombre</button>
    </div>
  )
}

export default App
