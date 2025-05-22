import React from 'react';
import ImageDeck from './ImageDeck';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="min-h-screen overflow-hidden bg-black text-white pt-24 px-8 pb-12"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* ImageDeck on the left with animation */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ImageDeck />
        </motion.div>

        {/* About text on the right with animation */}
        <motion.div
          className="w-full lg:w-1/2 max-h-[calc(100vh-100px)] overflow-y-auto pr-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-6">About Me</h1>

          <p className="max-w-3xl text-lg leading-relaxed mb-6">
            Hello! I’m Smruti — part bioengineer, part code enthusiast, and full-time explorer of ideas.
            I come from a humble town, Mangrulpir, in Maharashtra, India. I recently graduated from IIT Jodhpur 
            with a degree in Bioscience and Bioengineering. I was selected as a SURE intern at IIT Hyderabad, 
            where I developed a GUI for a psychometric test to collect vital data from patients.
            I'll soon be joining Deutsche Bank as a Market Risk Analyst in July 2025.
          </p>

          <p className="max-w-3xl text-lg leading-relaxed mb-6">
            My journey might sound like a plot twist: from pipettes to Python, lab reports to financial dashboards — 
            but that’s what keeps life interesting! I’m fascinated by how data, technology, and human behavior 
            collide in finance, and I’m passionate about decoding that puzzle and proving that even a bioengineering 
            grad can crunch numbers like a pro.
          </p>

          <p className="max-w-3xl text-lg leading-relaxed mb-6">
            Growing up, I always wanted to travel — but finances were tight, and vacations were a luxury. Now, with a bit more freedom, I’m ready to explore the world!
            When I’m not working or figuring out life, you’ll probably find me in the kitchen trying out new recipes, doodling or drawing, binge-watching sitcoms 
            (trust me, if there’s a sitcom you love, I’ve probably watched it twice), or out running and playing whatever sport I can find. 
            I also have this compulsive habit of clicking pictures wherever I go — because memories, vibes, and good lighting matter. 
            I’m always up for trying something new, chasing passion projects, and building weird but wonderful habits.
            Life’s too short to not mix things up, right?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
