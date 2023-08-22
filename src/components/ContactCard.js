import React from "react";
import "./Styles/ContactCard.css"

const ContactCard = ({ icon, title, link, text }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <a href={link} className="card-link">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
