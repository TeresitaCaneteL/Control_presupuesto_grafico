import React from 'react'
import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto

}) => {
  const [ disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(() =>{
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const totalDisponible = presupuesto - totalGastado ;
    //calcular porcentaje

    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

      setDisponible(totalDisponible)
      setGastado(totalGastado)
      setTimeout(() => {
        setPorcentaje(nuevoPorcentaje)
      }, 1500);
  }, [gastos])

  const formatearCantidadCLP = (cantidad) => {
    // Convierte la cantidad a un número si no lo es
    const cantidadNumerica = Number(cantidad);

    if (isNaN(cantidadNumerica)) {
      return "Cantidad no válida";
    }

    return cantidadNumerica.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP'
    });
  }

  const handleResetApp = () =>{
    const resultado = confirm('¿Desea Resetear la app');
    if(resultado){
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    }

  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
     { }
      <CircularProgressbar
        value={porcentaje}
        text={` ${porcentaje} % Gastado`}
        styles= { buildStyles ( {
          pathColor:porcentaje > 100 ? `#DC2626` : `#C613DB`,
          textColor: porcentaje > 100 ? `#DC2626` : '#3D0744',
          trailColor: '#f5f5f5',
          backgroundColor: '#f88',
        })}
      />;

        <div className='contenido-presupuesto'>
          <button
          className='reset-app'
          type='button'
          onClick={handleResetApp}
          >Resetear App</button>
          <p>
          <span>Presupuesto: </span> {formatearCantidadCLP(presupuesto)}
          </p>

        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
          <span>Disponible: </span> {formatearCantidadCLP(disponible)}
        </p>

        <p>
          <span>Gastado: </span> {formatearCantidadCLP(gastado)}
        </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto