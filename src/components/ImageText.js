import React from "react";
import "./Styles/ImageText.css";

const ImageText = ({ imageUrl, heading, text, props }) => {
  return (
    <div className="image-text-container my-3">
      <div className="image-container">
        <img src={imageUrl} alt="Image" />
      </div>
      <div className="text-container">
        <h2 style={{color: props ==='dark'?'white':'#042743'}}>{heading}</h2>
        <p style={{color: props ==='dark'?'white':'#042743'}}>{text}</p>
      </div>
    </div>
  );
};

export default ImageText;
