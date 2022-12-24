import { useRef } from "react";
import imagen0 from "./images/rey_atanagildo.png";
import imagen1 from "./images/rey_sisebuto.png";
import "./App.css";

function App() {

  const cambio = 23.16;
  const refCaja = useRef();

  // function incrementar(e) {
  // Pasamos a funcion flecha
  const incrementar = (e) => {
    // console.log(e.target.innerHTML);
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    // e.target.style.backgroundColor = "red";
    console.log(e.target.innerHTML);
    if(Number(e.target.innerHTML) === 8) {
      e.target.style.backgroundColor = "red";
    }
    if(Number(e.target.innerHTML) === 10) {
      e.target.innerHTML = 1;
      e.target.style.backgroundColor = "white";
    }
  }

  // function convertir() {                        
  const convertir = () => {
    //Tengo que acceder al valor de refCaja y multiplicarlo por el
    // Valor del peso mexicano que esta en 23.16
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  }

  // function cambiar(e) {
  const cambiar = (e) => {
    // e.target.src = imagen1;
    // console.log(e.target.src);
    if (e.target.src.includes('atanagildo')) {
      // alert('Estoy en Atanagildo');
      e.target.src = imagen1;
    } else {
      // alert('Estoy en Sisebuto');
      e.target.src = imagen0;
    }
  }

  // function lectura(e) {
  const lectura = (e) => {
    // console.log(e.target.value);
    refCaja.current.innerHTML = e.target.value;
  }

  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>1</div>
      <button onClick={convertir}>Aceptar</button>
      <div>
        <img onClick={cambiar} src={imagen0} alt="imagen" />
      </div>
      <input onChange={lectura} className="campo" />
    </>
  );
}

export default App;
