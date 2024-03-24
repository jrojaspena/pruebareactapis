
import { useState } from "react"


const Boton = ({ordenAscendente, setOrdenAscendente}) => {

  const [nombre, setNombre] = useState('descendentemente')

  const invertirOrden = (e) => {
    setNombre(ordenAscendente ? 'descendentemente ' : 'ascendentemente')
    setOrdenAscendente(!(e.target.value === "true"))
  }

  return (
    <button 
      type="button" 
      className="btn btn-secondary" 
      value={ordenAscendente}
      onClick={(e) => invertirOrden(e)} 
    >
     Ordenar {nombre}
    </button>
  )
}

export default Boton