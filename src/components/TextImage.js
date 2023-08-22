import React from "react";
import "./Styles/ImageText.css";

const TextImage = ({ imageUrl, heading, text, props }) => {
  return (
    <div className="image-text-container my-3">
      <div className="text-container reverse">
        <h2 style={{ color: props === "dark" ? "white" : "#042743" }}>
          {heading}
        </h2>
        <p style={{ color: props === "dark" ? "white" : "#042743" }}>{text}</p>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="Image" />
      </div>
    </div>
  );
};

export default TextImage;
