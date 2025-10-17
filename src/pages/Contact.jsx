import Header from '../components/molecules/Header';
import Button from '../components/atoms/Button';
import '../styles/pages/contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    alert(`Gracias, ${name}! Tu mensaje ha sido recibido. Te contactaré a ${email} pronto.`);
    e.target.reset();
  };
  return (
    <div className="contact">
      <Header />
      <section className="contact-section">
        <h2>Contáctame</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <Button text="Enviar" type="submit" />
        </form>
      </section>
    </div>
  )
}

export default Contact;