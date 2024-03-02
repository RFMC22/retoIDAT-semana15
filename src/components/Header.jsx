import Buscador from "./Buscador"
import '../styles/Header.css'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} />
      <Buscador/>
    </header>
  )
}

export default Header