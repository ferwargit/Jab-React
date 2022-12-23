import imagen0 from "./images/rey_atanagildo.png";
import imagen1 from "./images/rey_sisebuto.png";
import "./App.css";

function App() {

  function incrementar(e) {
    // console.log(e.target.innerHTML);
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    e.target.style.backgroundColor = "red";
  }

  return (
    <>
      <div className="caja" onClick={incrementar}>1</div>
      <button>Aceptar</button>
      <div>
        <img src={imagen0} alt="imagen" />
      </div>
      <input className="campo" />
    </>
  );
}

export default App;
