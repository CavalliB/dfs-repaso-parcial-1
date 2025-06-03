const Controles = ({ onCambiarUnidad, onCambiarClima }) => {
    return (
        <div className='controles-clima'>
            <button onClick={onCambiarUnidad}>Cambiar Unidad</button>
            <button onClick={(Soleado) => onCambiarClima('Soleado')}>Soleado</button>
            <button onClick={(Nublado) => onCambiarClima('Nublado')}>Nublado</button>
        </div>
    )
}

export default Controles