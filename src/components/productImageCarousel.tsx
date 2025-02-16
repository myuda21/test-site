import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

const images = [
  "/bedSmall.png",
  "/bedSmall.png",
  "/bedSmall.png",
  "/bedSmall.png",
  "/bedSmall.png",
];

const ProductImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Image Container */}
      <div className="relative w-full h-[400px] overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex ? "translate-x-0" : index > currentIndex ? "translate-x-full" : "-translate-x-full"
            }`}
          >
            <Image
              src={src}
              alt={`Product Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex absolute top-1/2 left-0 right-0 px-4 transform -translate-y-1/2 justify-between">
                <button onClick={handlePrev} className="p-2 bg-white rounded-full shadow-md">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={handleNext} className="p-2 bg-white rounded-full shadow-md">
                    <ChevronRight size={24} />
                </button>
            </div>

      {/* Image Indicators */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageCarousel;