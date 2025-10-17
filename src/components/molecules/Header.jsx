import { Link } from 'react-router-dom';
import '../../styles/molecules/header.css'

function Header() {
  return (
    <header className="header">
      <h1>Mi Portafolio</h1>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/about">Acerca de mi</Link> | 
        <Link to="/projects">Proyectos</Link> | 
        <Link to="/contact">Contacto</Link> |
        <Link to="/notFound">NotFound</Link>
      </nav>
    </header>
  );
}

export default Header;