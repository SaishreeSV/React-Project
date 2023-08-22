import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/ContactUs.css";
import ContactCard from "../components/ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsappSquare,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Styles/ContactUs.css";

const ContactUs = (props) => {
  return (
    <>
      <div className="app-container">
        <div
          className="container my-5"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h1 className="text-center mb-4">We'd Love to Hear from you</h1>
          <div className="paragraph">
            <h6>
              Any questions? Please drop an email at support@puritea.in
              <br />
              <br />
              Wanna Meet us in person? Please text us in prior and we can
              catchup for a cup of tea!
            </h6>
          </div>
        </div>
        <div>
          <h2>Wanna Stalk More?</h2>
          <div className="card-container">
            <ContactCard
              icon={
                <FontAwesomeIcon
                  icon={faWhatsappSquare}
                  className="whatsapp-icon"
                />
              }
              title="Order via Whatsapp"
              link="https://www.instagram.com/puritea.in/"
              text="This is the text for Card 1."
            />
            <ContactCard
              icon={
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  className="instagram-icon"
                />
              }
              title="Order via Instagram"
              link="https://www.instagram.com/puritea.in/"
              text="This is the text for Card 2."
            />
            <ContactCard
              icon={
                <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
              }
              title="Follow on Linkedin"
              link="https://www.instagram.com/puritea.in/"
              text="This is the text for Card 3."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
