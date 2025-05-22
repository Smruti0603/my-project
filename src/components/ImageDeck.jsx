import React, { useState, useEffect } from 'react';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';

const images = [about1, about2, about3];

export default function ImageDeck() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const handlePrev = () => {
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex(prev => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-[450px] h-[600px] rounded-xl overflow-hidden shadow-lg">
      <img
        src={images[currentImageIndex]}
        alt="About Me"
        className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        key={currentImageIndex}
      />

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ›
      </button>
    </div>
  );
}
