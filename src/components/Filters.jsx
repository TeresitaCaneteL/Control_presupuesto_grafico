import { useEffect, useState} from 'react'

const Filters = ({ filtro, setFiltro }) => {
  return (
    <div className='filtros sombra contenedor'>
      <form action="">
        <div className='campo'>
          <label>Filtrar Gastos</label>
          <select
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
          >
            <option value="">-- Todos --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="gastos">Gastos varios</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filters