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

  const [contador, setContador] = useState(0);
  
  // Como tiene una sola linea lo puedo pasar al html con los ()
  const aumentar = () => {
    // setContador(contador + 1);
    // Otra manera que tengo es extraer el valor de contador
    // En este caso e es el valor de contador y de esta manera
    // lo puedo hacer varias veces y ejecuta todas las lineas
    // En este caso sumaria de a 3
    setContador((e) => e + 1);
    setContador((e) => e + 1);
    setContador((e) => e + 1);
  }
  const disminuir = () => {
    setContador(contador - 1);
  }
  const restablecer = () => {
    setContador(0);
  }

  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  const sumar = () => {
    setResultado(Number(numero1) + Number(numero2))
  }

  const lectura1 = (e) => {
    setNumero1(e.target.value)
  }
  const lectura2 = (e) => {
    setNumero2(e.target.value)
  }

  return (
    <div className="App">
      <h1>Hola, me llamo {nombre}</h1>
      {/* <button onClick={cambiar}>Cambiar Nombre</button> */}
      <button onClick={() => setNombre('Bob Esponja')}>Cambiar Nombre</button>
      <hr />
      <div className="contador">
        {/* <button onClick={aumentar}>Aumentar</button> */}
        <button onClick={aumentar}>Aumentar</button>
        {/* <button onClick={disminuir}>Disminuir</button> */}
        <button onClick={() => setContador(contador - 1)}>Disminuir</button>
        {/* <button onClick={restablecer}>Restablecer</button> */}
        <button onClick={() => setContador(0)}>Restablecer</button>
        <h1>{contador}</h1>
      </div>
      <hr />
      <div className="cajaSumar">
        {/* Tiene que ir guardando dentro de numero1 */}
        <input type="number" value={numero1} onChange={lectura1}/>+ 
        <input type="number" value={numero2} onChange={lectura2}/>= 
        <input type="number" value={resultado} readOnly />
        {/*  */}
        <button onClick={() =>sumar()}>Sumar</button>
      </div>
    </div>
  )
}

export default App
