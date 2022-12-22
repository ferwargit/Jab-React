// 1ro aplica el estilo de App.css
import './App.css';
// 2do aplica el estilo de style.css
import './css/style.css';
import imagen from './img/descarga.png';

function App() {

  let nombre = "Fernando";
  let apellido = ['Herrera', 'García', 'González'];
  let direccion = {calle: 'Calle 1', numero: 123	};
  let caja = <div>Aquí hay un div</div>

  return (
    <div className="fondo">
      <h1>Curso de React</h1>
      <div>{nombre}</div>
      <h2>{apellido[1]}</h2>
      <h3>{direccion.calle} {direccion.numero}</h3>
      <div>{caja}</div>
      <img src={imagen} className="img" alt="imagen" />
      <input type="text" />
      <input value={nombre} />
      <br />
    </div>
  );
}

export default App;