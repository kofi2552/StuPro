// ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";

const images = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.png",
];

const ImageSlider = () => {
  return (
    <div className="slide-container w-full mx-auto">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        //navigation // Enables navigation buttons
        pagination={{ clickable: true }} // Enables pagination dots
        loop // Enables infinite loop mode
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="img-slider w-full h-64 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
