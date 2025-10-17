import '../styles/pages/about.css';
import Header from '../components/molecules/Header';

function About() {
  return (
    <div className="about">
      <Header />
      <section className="skills">
        <h2>Mis Habilidades</h2>
        <ul>
          <li>Desarrollo Frontend con React</li>
          <li>Desarrollo Backend con Java Spring Boot</li>
          <li>Gestión de proyectos con Vite</li>
          <li>Diseño responsivo</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experiencia</h2>
        <p>
          He trabajado en proyectos personales como este portafolio y una calculadora web, donde apliqué principios de diseño responsivo y Atomic Design. Actualmente, estoy explorando frameworks modernos para expandir mis conocimientos.
        </p>
      </section>

      <section className="education">
        <h2>Educación</h2>
        <p>
          Cursé un bootcamp de desarrollo web y complementé mi aprendizaje con cursos en línea sobre React y JavaScript. Siempre estoy abierto a nuevas certificaciones para seguir creciendo.
        </p>
      </section>
      <section className="interests">
        <h2>Intereses</h2>
        <p>
          Fuera del código, disfruto de la música, los videojuegos y explorar nuevas tecnologías. Creo que el equilibrio entre trabajo y pasatiempos impulsa mi creatividad.
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Juan ´Perez - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default About;