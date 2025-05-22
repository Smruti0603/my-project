import React from 'react';

export default function Footer() {
  const links = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/smruti-dawale', hoverColor: 'hover:text-yellow-400' },
    { name: 'GitHub', url: 'https://github.com/Smruti0603', hoverColor: 'hover:text-yellow-400' },
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UCtHbrefNOnEN0cay3w411Ww', hoverColor: 'hover:text-yellow-400' },
    { name: 'Leetcode', url: 'https://leetcode.com/u/smruti_06', hoverColor: 'hover:text-yellow-400' },
    { name: 'CodeForces', url: 'https://www.youtube.com', hoverColor: 'hover:text-yellow-400' },
  ];

  return (
    <footer className="w-full fixed bottom-0 left-0 bg-black z-20 px-10 py-4">
      <div className="flex justify-between items-center w-full">

        {/* Left side: Social links */}
        <div
          className="flex items-center space-x-14 text-xl"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.4rem',
          }}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center space-x-2 text-white transition-colors duration-150 ${link.hoverColor}`}
            >
              <span>{link.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10m0-10h10v10" />
              </svg>
            </a>
          ))}
        </div>

        {/* Right side: Spotify button with white border */}
        <div className="pr-2">
          <a
            href="https://open.spotify.com/user/fpt76utosa5xyt57l7n5ni4r1?si=zAgzDXLkShOUgmckUJyZnQ"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white font-semibold py-2 px-4 rounded-full transition hover:bg-white hover:text-black flex items-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 496 512"
              className="w-5 h-5"
            >
              <path d="M248 8C111 8 0 119 0 256c0 137 111 248 248 248s248-111 248-248C496 119 385 8 248 8zm121.2 365.6c-5.2 8.4-16.4 11.2-24.8 6.4-68.4-41.6-154.8-51.2-256.4-28.4-9.6 2-19.2-4-21.2-13.6-2-9.6 4-19.2 13.6-21.2 113.6-24.8 210.4-13.2 288.8 32.4 8.4 4.8 11.2 16.4 6 24.4zm34.8-68.4c-6.4 10.4-20.4 14-30.8 7.6-78.8-48.4-198.4-62.8-291.6-34.4-11.2 3.2-23.2-2.8-26.4-14-3.2-11.2 2.8-23.2 14-26.4 107.2-32 240.8-16 331.6 39.6 10.4 6.4 14 20.4 7.6 30.8zm2.8-72.8c-93.6-55.6-250-60.8-342-33.2-13.2 4-27.2-3.2-31.2-16.4-4-13.2 3.2-27.2 16.4-31.2 109.6-32.4 282.8-26 390 38.4 12 7.2 16 22.8 8.8 34.8-7.6 12-22.8 16-34.8 8.8z" />
            </svg>
            <span>Spotify</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
