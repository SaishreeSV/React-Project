import React from "react";
import Carousel from "../components/Carousel";
import ImageText from "../components/ImageText";
import TextImage from "../components/TextImage";
import TestimonialCarousel from "../components/TestimonialCarousel";
import ScrollTopButton from "../components/ScrollTopButton";
import CarouselText from "../components/CarouselText";
import Modal from "../components/Modal";

export default function Home(props) {
  return (
    <>
      <Carousel />
      <CarouselText
        heading={<Modal heading="Tea" />}
        text="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nulla nec nisl iaculis, a aliquam nunc sollicitudin.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nulla nec nisl iaculis, a aliquam nunc sollicitudin.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nulla nec nisl iaculis, a aliquam nunc sollicitudin.          
            "
      />
      <TextImage
        imageUrl={process.env.PUBLIC_URL + "/Images/TeaTypes/Tea1.png"}
        heading={<Modal heading="Black Tea" />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nulla nec nisl iaculis, a aliquam nunc sollicitudin."
        props={props.mode}
      />
      <ImageText
        imageUrl={process.env.PUBLIC_URL + "/Images/TeaTypes/Tea2.png"}
        heading={<Modal heading="Ginger Tea" />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nulla nec nisl iaculis, a aliquam nunc sollicitudin."
        props={props.mode}
      />
      <TextImage
        imageUrl={process.env.PUBLIC_URL + "/Images/TeaTypes/Tea3.png"}
        heading={<Modal heading="Cinnamon Tea" />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nulla nec nisl iaculis, a aliquam nunc sollicitudin."
        props={props.mode}
      />
      <ImageText
        imageUrl={process.env.PUBLIC_URL + "/Images/TeaTypes/Tea4.png"}
        heading={<Modal heading="Masala Tea" />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod nulla nec nisl iaculis, a aliquam nunc sollicitudin."
        props={props.mode}
      />
      <TestimonialCarousel />
      <ScrollTopButton />
    </>
  );
}
