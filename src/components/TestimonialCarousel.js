import React, { useState, useEffect } from "react";
import "./Styles/TestimonialCarousel.css";

const testimonials = [
  {
    image: process.env.PUBLIC_URL + "Images/Testimonials/Img1.png",
    name: "Sai",
    text: "Easily copy and paste Testimonial components, sections and elements for in just one click. With hundreds of predesigned Testimonial components to choose from, we make it easy for you to create a beautiful web app or website with ",
  },
  {
    image: process.env.PUBLIC_URL + "Images/Testimonials/Img2.png",
    name: "Tony",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Easily copy and paste Testimonial components, Easily copy and paste Testimonial components, Nullam euismod nulla nec nisl iaculis, a aliquam nunc sollicitudin.",
  },
  {
    image: process.env.PUBLIC_URL + "Images/Testimonials/Img3.png",
    name: "Shree",
    text: "Gain access to our complete library of components. Easily copy and paste Testimonial components, Easily copy and paste Testimonial Easily copy and paste Testimonial components, Unlimited combinations for you to build better products faster.",
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Auto-scroll every 5 seconds
    const interval = setInterval(handleNextClick, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-card">
        <img
          src={testimonials[activeIndex].image}
          alt={testimonials[activeIndex].name}
        />
        <h2>{testimonials[activeIndex].name}</h2>
        <p>{testimonials[activeIndex].text}</p>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrevClick}>&#8249;</button>
        <button onClick={handleNextClick}>&#8250;</button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
