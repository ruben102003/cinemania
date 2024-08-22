import React from 'react';
import './Footer.css'; // Asegúrate de que este archivo contiene los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Ubicación</h3>
          <p>Via Martiri della Resistenza, 2, 60125 Ancona AN, Italy</p>
          <a 
            href="https://maps.google.com/?q=Via+Martiri+della+Resistenza,+2,+60125+Ancona+AN,+Italy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="map-link"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.273206315849!2d13.502882415813473!3d43.60604997912398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d7ff7fb5a4efb%3A0x837b3ff680b303c1!2sVia%20Martiri%20della%20Resistenza%2C%202%2C%2060125%20Ancona%20AN%2C%20Italy!5e0!3m2!1sen!2us!4v1690067469285!5m2!1sen!2us" 
              width="200" 
              height="150" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="Google Maps"
            ></iframe>
            Ver en Google Maps
          </a>
        </div>
        <div className="footer-column">
          <h3>Sobre Nosotros</h3>
          <p>
            En Cinemanía, nos dedicamos a ofrecer la mejor experiencia cinematográfica. 
            Ofrecemos una amplia variedad de películas y servicios para todos los gustos. 
            ¡Gracias por elegirnos!
          </p>
        </div>
        <div className="footer-column">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
            </a>
            
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
            </a>
          </div>
          <p className="small-text">Síguenos en nuestras redes sociales</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
