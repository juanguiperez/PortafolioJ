import '../styles/pages/projects.css';
import Header from '../components/molecules/Header';

import reactWebp from '../assets/img/reactLogo.webp'
import viteIcon from '../assets/img/viteLogo.webp'
import pythonIcon from '../assets/img/pythonLogo.webp'

function Projects() {
  return (
    <div className="projects">
      <Header />
      <section className="projects-section">
        <h2>Mis Proyectos</h2>
        <div className="project-card">
          <img src={reactWebp} alt="React" className="language-img" />+
          <img src={viteIcon} alt="Vite" className="language-img"/>
          <p>Un sitio web dinámico creado con React y Vite para mostrar mis habilidades.</p>
          <a href="https://github.com/Cr1stopherB/portafolio" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
        </div>

        <div className="project-card">
          <img src={pythonIcon} alt="Python" className="language-img" />
          <p>En mi proyecto universitario, utilicé Python para desarrollar una aplicación de procesamiento de datos que analizaba información académica. Aproveché la simplicidad y legibilidad del lenguaje junto con sus potentes bibliotecas para crear una solución eficiente y escalable.</p>
          <p>No disponible en GitHub</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Juan Perez - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Projects;