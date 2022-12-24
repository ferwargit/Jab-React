import imagen0 from './images/rey_atanagildo.png';
import imagen1 from './images/rey_leogivildo.png';
import imagen2 from './images/rey_sisebuto.png';
import rey from './images/rey_incognito.png';
import './css/styles.css';

function App() {
  let nombres = ['Rey Atanagildo', 'Rey Leogivildo', 'Rey Sisebuto'];

  const cambiarTexto = (e) => {
    // console.log(e.target.innerText);
    if(e.target.innerText === "Visto"){
      e.target.innerText = "";
    } else {
      e.target.innerText = "Visto";
    }
  }

  const cambiarImagen = (e) => {
    // console.log(e.target.src);
    if(e.target.src.includes('incognito')){
      // Lo tiene que ocultar
      // e.target.src = "";
      // Oculta el elemento guardando su espacio
      e.target.style.visibility = "hidden";
    } else {
      // Lo tiene que mostrar
      e.target.src = rey;
    }
    // Ahora quiero quitar el color de fondo que esta en el div
    // que es el elemento padre del elemento img donde estoy haciendo click
    // resurlvo esto agregando parentElement o parentNode
    // e.target.parentElement.style.backgroundColor = "transparent";
    e.target.parentNode.style.backgroundColor = "white";

  }

  return (
    <div className="contenedor">
      <div className='caja'>
        <img onClick={cambiarImagen} src={imagen0} alt={nombres[0]} />
        <div onClick={cambiarTexto} className='nombre'>{nombres[0]}</div>
      </div>
      <div className='caja'>
        <img onClick={cambiarImagen} src={imagen1} alt={nombres[1]} />
        <div onClick={cambiarTexto} className='nombre'>{nombres[1]}</div>
      </div>
      <div className='caja'>
        <img onClick={cambiarImagen} src={imagen2} alt={nombres[2]} />
        <div onClick={cambiarTexto} className='nombre'>{nombres[2]}</div>
      </div>
    </div>
  );
}

export default App;
