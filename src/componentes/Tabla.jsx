import { useEffect, useState } from 'react'
import './tabla.css'

const Tabla = ({datos, ordenAscendente, criterio}) => {

  const [datosFiltrados, setDatosFiltrados] = useState([]);

  useEffect(() => {
    setDatosFiltrados(datos)
  }, [datos]) 

  useEffect(() => {
    setDatosFiltrados(datosFiltrados.slice().reverse())
  }, [ordenAscendente])

  useEffect(() => {
    const criterioAux = criterio.toLowerCase();
    const filtrados = datos.filter((datos) => 
      datos.Estacion.toLowerCase().includes(criterioAux) || 
      datos.Estado.toLowerCase().includes(criterioAux) || 
      datos.Temp.toLowerCase().includes(criterioAux)
    )
    setDatosFiltrados(filtrados);
  }, [criterio])

  return (
    <div>
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Localidad</th>
                <th scope="col">Temperatura</th>
                <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody>
            {datosFiltrados?.map((fila) => {
              return (
                <tr key={fila.Codigo} scope="row">
                  <td>{fila.Estacion}</td>
                  <td>{fila.Temp} °C</td>
                  <td>{fila.Estado}</td>
                </tr>
              )
            })}
            </tbody>
        </table>
    </div>
  )
}

export default Tabla 