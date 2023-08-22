import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],

    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "Images/Carousel/CAROUSEL1.png"}
            alt="Image1"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "Images/Carousel/CAROUSEL2.png"}
            alt="Image1"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "Images/Carousel/CAROUSEL3.png"}
            alt="Image3"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "Images/Carousel/CAROUSEL4.png"}
            alt="Image4"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "Images/Carousel/CAROUSEL5.png"}
            alt="Image5"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
