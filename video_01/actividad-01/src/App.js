import imagen0 from './images/rey_atanagildo.png';
import imagen1 from './images/rey_leogivildo.png';
import imagen2 from './images/rey_sisebuto.png';
import './css/styles.css';

function App() {
  let nombres = ['Rey Atanagildo', 'Rey Leogivildo', 'Rey Sisebuto'];
  return (
    <div className="contenedor">
      <div className='caja'>
        <img src={imagen0} alt={nombres[0]} />
        <div className='nombre'>{nombres[0]}</div>
      </div>
      <div className='caja'>
        <img src={imagen1} alt={nombres[1]} />
        <div className='nombre'>{nombres[1]}</div>
      </div>
      <div className='caja'>
        <img src={imagen2} alt={nombres[2]} />
        <div className='nombre'>{nombres[2]}</div>
      </div>
    </div>
  );
}

export default App;
