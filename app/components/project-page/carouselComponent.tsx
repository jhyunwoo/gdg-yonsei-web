"use client";

// components/Carousel.js
import React, { useState } from "react";
import "@/app/css/carousel.css";
import Image from "next/image";
import { FC } from "react";
import placeholderImg from "@/public/project/project-placeholder.jpg";
import { getProjectImageLink } from "@/lib/links/projectLinks";

interface CarouselProps {
  projectId: string;
  images: (string | null)[] | null;
}

const Carousel: FC<CarouselProps> = ({ projectId, images }) => {
  const dummyImage = "/project/project-placeholder.jpg";

  console.log("Loaded " + images?.length + " images!");

  const [currentIndex, setCurrentIndex] = useState(0);
  const validImages = images && images.length > 0 ? images : [dummyImage];

  const prevImage = () => {
    if (validImages) {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : validImages.length - 1
      );
    }

    console.log("Changed carousel image to " + (currentIndex + 1));
  };

  const nextImage = () => {
    if (validImages) {
      setCurrentIndex((prevIndex) =>
        prevIndex < validImages.length - 1 ? prevIndex + 1 : 0
      );
    }

    console.log("Changed carousel image to " + (currentIndex + 1));
  };

  return (
    <div className="relative">
      <button
        onClick={prevImage}
        className="bg-gray-200/70 border-none cursor-pointer text-2xl absolute top-1/2 transform -translate-y-1/2 z-10 left-2 hover:bg-gray-400"
      >
        ◀
      </button>
      <div className="w-full h-[500px] bg-gray-300">
        <div className="m-auto">
          <Image
            key={currentIndex}
            src={validImages[currentIndex] ? validImages[currentIndex] : placeholderImg}
            alt={`Slide ${currentIndex}`}
            height={1300}
            width={1300}
          />  
        </div>
      </div>
      <button
        onClick={nextImage}
        className="bg-gray-200/70 border-none cursor-pointer text-2xl absolute top-1/2 transform -translate-y-1/2 z-10 right-2 hover:bg-gray-400"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;