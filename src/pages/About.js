import React from "react";
import "./Styles/About.css";
import ScrollTopButton from "../components/ScrollTopButton";
import ImageText from "../components/ImageText";
import TextImage from "../components/TextImage";

export default function About(props) {
  return (
    <>
      <ScrollTopButton />
      <div
        className="about-container"
        style={{backgroundImage:`url(${process.env.PUBLIC_URL + "/Images/About/MainImage2.jpg"})`}}
      ></div>
      <div className="container">
        <h1
          className="my-3 about-heading"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          About Us
        </h1>
        <ImageText
          imageUrl={process.env.PUBLIC_URL + "/Images/About/OurBackground.png"}
          heading="Our Background"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nulla nec nisl iaculis, a aliquam nunc sollicitudin."
          props={props.mode}
        />
        <TextImage
          imageUrl={process.env.PUBLIC_URL + "/Images/About/OurVision.png"}
          heading="Our Vision"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nulla nec nisl iaculis, a aliquam nunc sollicitudin."
          props={props.mode}
        />
      </div>
    </>
  );
}
