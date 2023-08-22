import React from "react";
import "./Styles/Footer.css"; // Import the CSS file for the footer styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faTwitter, faLinkedin, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
  return (
    <>
    <footer className="footer-container">
      <div className="footer-content">
        <div>          
          <div className="footer-links">
            <div className="footer-logo">
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <a href="%PUBLIC_URL%/src/pages/FAQ" >FAQ</a>
            <a href="%PUBLIC_URL%/src/pages/contactus" >Help & Support</a>
            <a href="%PUBLIC_URL%/src/pages/contactus" >Contact Us</a>
          </div>
        </div>

        <div>
          <div>
            <h4 className="footer-data">Get in Touch!</h4>
          </div>
          <div className="footer-social-media">
            <a href="https://www.instagram.com/puritea.in/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faSquareInstagram} />          
            </a>
            <a href="#facebook" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />          
            </a>
            <a href="#Linkedin" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />          

            </a>
            <a href="#Twitter" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />          
            </a>
            <a href="#YouTube" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} />          
            </a>
        </div>

        </div>
        <div className="address">
          <h4>Address</h4>
          <p>wehwuhn<br />
            wjroiwejflknsdjn<br />
            wehrwoihjrew<br />
            India<br/>
          </p>
        </div>
      </div>
      <div className="footer-bottom">Proudly Indian Owned & Made In India © {new Date().getFullYear()} Puritea</div>
    </footer>
    </>
  );
};

export default Footer;
