import React, { useState, useEffect } from 'react';
import ExpImg1 from '../assets/experience1.jpg';
import ExpImg2 from '../assets/experience2.jpg';
import ExpImg3 from '../assets/experience3.jpg';

const images = [ExpImg1, ExpImg2, ExpImg3];

export default function ImageDeckSmall() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex(prev => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-[400px] h-[260px] rounded-xl overflow-hidden shadow-lg">
      <img
        src={images[currentImageIndex]}
        alt="Experience"
        className="w-full h-full object-cover transition-opacity duration-700 ease-in-out rounded-xl"
        key={currentImageIndex}
      />

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        aria-label="Previous Image"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        aria-label="Next Image"
      >
        ›
      </button>
    </div>
  );
}
