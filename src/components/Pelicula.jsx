import '../styles/Pelicula.css'
import PropTypes from 'prop-types';

const Pelicula = ({pelicula}) => {
  const {img,titulo,genero,descripcion} = pelicula;

  return (
    <div className='card'>
      <img src={img} alt={titulo} />
      <div className='info'>
        <h2>{titulo}</h2>
        <p><span>Genero:</span> {genero}</p>
        <p><span>Descripcion:</span> {descripcion}</p>
      </div>
    </div>
  )
}

Pelicula.propTypes = {
  pelicula: PropTypes.shape({
    img: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    genero: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
  }).isRequired,
}

export default Pelicula