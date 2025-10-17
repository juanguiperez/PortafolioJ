import '../styles/pages/home.css';
import Header from '../components/molecules/Header';
import Button from '../components/atoms/Button'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
// import photoMe from '../assets/img/me.webp'

function Home() {
  return (
    <div className="home">
      <Header />
      <section>
        <h2>Bienvenido a mi Portafolio</h2>
        <div className="profile-image">
            <a href="https://thispersondoesnotexist.com/" target="_blank" rel="noopener noreferrer"></a>
          {/* <img src={photoMe} alt="Foto de juan" /> */}
        </div>
        <p>Soy un desarrollador web con experiencia en React, Vite y diseño basado en Atomic Design. En este Portafolio podrás explorar mis proyectos y aprender más sobre mí.</p>
      </section>

      <section className="call-to-action">
        <h2>¿Interesado en colaborar?</h2>
        <p>Contáctame para discutir oportunidades o proyectos.</p>
        <Button text="Contáctame" onClick={() => (window.location.href = '/contact')} />
      </section>

      <section className="social-links">
        <h2>Conéctate conmigo</h2>
      </section>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>
      <footer className="footer">
        <p>&copy; 2025 Juan Perez - Todos los derechos reservados.</p>
      </footer>
    </div >
    
  );
}

export default Home;