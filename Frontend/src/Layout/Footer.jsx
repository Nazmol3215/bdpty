import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="text-white text-center p-4" style={{ backgroundColor: '#3F9E53' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-2 mb-2">
            <a href="https://web.facebook.com/" className="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
          </div>
          <div className="col-md-2 mb-2">
            <a href="https://wa.me/01641" className="btn btn-success w-100" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>
          </div>
          <div className="col-md-2 mb-2">
            <a href="https://web.facebook.com/" className="btn btn-danger w-100" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} /> YouTube
            </a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p>
              <FontAwesomeIcon icon={faPhone} /> <a href="tel:01641-131205" className="text-white">00641-00000</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:bdtreehouse205@gmail.com" className="text-white">jdvhnurfdi@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h4>About Us</h4>
          <h4>Concut Us</h4>
          <h4>Help you</h4>
          <h4>Garden Palace</h4>
          <h1>Garden Palace</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;