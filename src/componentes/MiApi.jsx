import { useEffect, useState } from "react"
import Tabla from "./Tabla"


const MiApi = ({ordenAscendente, criterio}) => {

  const [datos, setDatos] = useState([])

  const urlApi = 'https://api.gael.cloud/general/public/clima'

  useEffect (() => {
    const getData = async() => {
      const res = await fetch(urlApi)
      const data = await res.json()
      setDatos(data)
    }

    getData()
  }, [])

  return (
    <div>
        <br />
        <Tabla datos={datos} ordenAscendente={ordenAscendente} criterio={criterio}/>
    </div>
  )
}

export default MiApi