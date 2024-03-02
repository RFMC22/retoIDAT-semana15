import '../styles/Buscador.css'
import search from '../assets/search.png'
const Buscador = () => {
  return (
    <form>
      <div className='search'>
        <img src={search} alt="" />
        <input type="search" name="peli" id="peli" placeholder="Buscar Pelicula" />
      </div>
      <input type="submit" value="Buscar" className='button' />
    </form>
  )
}

export default Buscador