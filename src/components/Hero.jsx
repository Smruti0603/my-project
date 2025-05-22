import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../kitty.css';
import Image1 from '../assets/1.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/3.png';

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const cards = [
    { href: '/projects', alt: 'Projects', src: Image1, style: { marginTop: '-8rem', width: '20rem' } },
    { href: '/experience', alt: 'Experience', src: Image2, style: { marginTop: '-4rem', width: '20rem' } },
    { href: '/life-updates', alt: 'Life Updates', src: Image3, style: { marginTop: '-4rem', width: '15rem' } },
  ];

  useEffect(() => {
    // Trigger animation on mount
    setIsLoaded(true);
  }, []);

  return (
    <section
      className={`relative min-h-screen overflow-hidden bg-black text-white flex flex-col
        transition-opacity transition-transform duration-700 ease-out
        ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {/* Top toolbar */}
      <header className="w-full h-20 bg-black fixed top-0 left-0 z-20" />
      <div className="h-20" />

      {/* Main content */}
      <main className="flex flex-col justify-between flex-grow">
        {/* ... your existing JSX ... */}
        <div className="flex justify-left ml-10 items-end flex-grow relative">
          <div className="flex flex-row items-center space-x-8 mb-12 -mt-24">
            {/* Kitty */}
            <div className="relative scale-75" style={{ minWidth: 300, minHeight: 300 }}>
              <div className="kitty">
                <div className="face">
                  <div className="ear"></div>
                  <div className="eye"></div>
                  <div className="mouth">
                    <div className="nose"></div>
                    <div className="whisker-1"></div>
                    <div className="whisker-2"></div>
                  </div>
                  <div className="body">
                    <div className="hand">
                      <div className="hand-l"></div>
                      <div className="hand-r"></div>
                    </div>
                  </div>
                  <div className="tail"></div>
                </div>
                <div className="laptop">
                  <div className="logo"></div>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div
              style={{ fontFamily: "'Cormorant Garamond', sans-serif" }}
              className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide leading-snug max-w-md"
            >
              <p style={{ marginTop: '50px' }}>Crunching Numbers,</p>
              <p>Inspired Cooking,</p>
              <p className="flex items-center">
                Endless Energy
                <span className="ml-2 loading-dots text-white font-bold text-3xl">.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Witty note on the right between kitty and grid */}
        <div className="absolute right-10 top-[35%] text-sm text-white/70 tracking-wide text-right leading-tight z-10">
          <p>AVAILABLE FOR</p>
          <p>TECH TALKS OR SHALLOW JOKES</p>
        </div>

        {/* Lower half (grid strip) */}
        <div
          className="relative w-full h-[49vh] flex justify-center items-start"
          style={{ position: 'relative', top: '-0.5px' }}
        >
          {/* Grid Background */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Cards container */}
          <div className="relative z-10 flex flex-row items-center" style={{ gap: '6rem' }}>
            {cards.map((card, index) => {
              const isInternal = card.href.startsWith('/');
              const Wrapper = isInternal ? Link : 'a';

              return (
                <Wrapper
                  key={index}
                  to={isInternal ? card.href : undefined}
                  href={!isInternal ? card.href : undefined}
                  className={`transition-transform duration-300 ${
                    hoveredIndex === index
                      ? 'scale-110 opacity-100'
                      : hoveredIndex !== null
                      ? 'opacity-55'
                      : 'opacity-100'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={card.style}
                >
                  <img src={card.src} alt={card.alt} className="rounded-lg shadow-md" />
                </Wrapper>
              );
            })}
          </div>
        </div>
        <div className="w-full h-[1px] bg-white/30" />
      </main>

      {/* Bottom toolbar */}
      <footer className="w-full h-20 bg-black" />
    </section>
  );
}
