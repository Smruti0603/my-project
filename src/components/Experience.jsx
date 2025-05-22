import React from 'react';
import { motion } from 'framer-motion';
import ImageDeckSmall from './ImageDeckSmall';

export default function Experience() {
  const experiences = [
    {
      title: 'SURE Intern',
      company: 'MedInfo Lab, IIT Hyderabad',
      duration: 'May 2024 – July 2024',
      description: `At the MedInfo Lab under Dr. Nagarajan Ganapathy, I built a complete end-to-end psychometric testing pipeline for acquiring and storing real-time physiological signals.
Using PsychoPy and PLUX APIs, I developed a GUI capable of recording up to 8 signals—like ECG and EMG—in real time. The data was automatically stored in Excel, tagged with patient ID and signal type.
I integrated Bluetooth connectivity libraries to ensure seamless pairing with devices, and built several interactive functions to automate the test process as much as possible.

It wasn’t just about the code—I had an amazing time with my friends there. From debugging together to late-night food runs, the internship was full of collaboration, learning, and laughter.`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Experience
      </motion.h1>

      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          className="flex flex-col lg:flex-row border border-gray-500 rounded-xl w-full max-w-7xl mb-12 p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: idx * 0.3 }}
        >
          {/* Left: ImageDeckSmall */}
          <div className="w-full lg:w-1/2 flex justify-start items-center mr-[-8px]">
            <ImageDeckSmall />
          </div>

          {/* Right: description */}
          <div className="w-[70%] -pl-32">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-2 -pl-32">{exp.title}</h2>
            <p className="text-gray-400 text-sm lg:text-base mb-4 -pl-32">
              {exp.company} • {exp.duration}
            </p>
            <p className="text-lg leading-relaxed whitespace-pre-line">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
