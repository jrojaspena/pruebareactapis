import {useState } from 'react'
import './App.css'
import Buscador from './assets/componentes/Buscador'
import Miapi from './assets/componentes/MiApi'
import Boton from './assets/componentes/Boton'

const App = () => {

  const [criterio, setCriterio] = useState('')
  const [ordenAscendente, setOrdenAscendente] = useState(true)

  return (
    <div className="container">
      <h1>Buscador de temperaturas en Chile</h1>
       <Buscador criterio={criterio} setCriterio={setCriterio}/>
       <Boton ordenAscendente={ordenAscendente} setOrdenAscendente={setOrdenAscendente}/>
       <Miapi ordenAscendente={ordenAscendente} criterio={criterio}/>
    </div>
  )
}

export default App
