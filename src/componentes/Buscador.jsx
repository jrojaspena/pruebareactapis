const Buscador = ({criterio, setCriterio}) => { 
    return (
      <div>
          <div className="input-group mb-3">
              <input 
              type="text" 
              value={criterio}
              onChange={(e) => setCriterio(e.target.value)} 
              className="form-control" 
              placeholder="Buscar localidad" 
              aria-label="Username" 
              aria-describedby="basic-addon1"/>
          </div>
      </div>
    )
  }
  
  export default Buscador