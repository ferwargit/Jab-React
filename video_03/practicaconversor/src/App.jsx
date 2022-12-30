// https://www.html6.es/curso/conversor.txt

import "./App.css";

const App = () => {
  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]

  return (
    <>
        <label htmlFor="u0">Etiqueta</label>
        <input id="u0" type="number"/> 
    </>
  )
}

export default App;