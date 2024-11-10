"use client";

// components/Carousel.js
import React, { useState } from "react";
import "@/app/css/carousel.css";
import Image from "next/image";
import { FC } from "react";

interface CarouselProps {
  images: (string | null)[] | null;
}

const dummyImage = "/project/project-placeholder.jpg" // Add a base64 encoded dummy image

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const validImages = images && images.length > 0 ? images : [dummyImage];

  const prevImage = () => {
    if (images) {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : images.length - 1,
      );
    }
  };

  const nextImage = () => {
    if (images) {
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }
  };

  return (
    <div className="carousel">
      <button onClick={prevImage} className="carousel-button">
        ◀
      </button>
      <div className="carousel-images">
        {validImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index}`}
            height={700}
            width={1300}
            className={`carousel-image ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <button onClick={nextImage} className="carousel-button">
        ▶
      </button>
    </div>
  );
};

export default Carousel;
