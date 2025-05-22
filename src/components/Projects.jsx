import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "IDFY FraudBusters Hackathon",
    tech: "NLP, Flask, AI, Data Visualization",
    date: "Sept 2024",

    points: [
      "Developed an AI-powered fraud detection system using NLP for PII detection and risk analysis.",
      "Used Flair’s NER model and regex, visualized PII risk scores using Plotly.",
      "Built a Flask-based deployable UI for real-time results."
    ]
  },
  {
    title: "WeatherWhiz",
    tech: "iOS Development, SwiftUI",
    date: "Jan 2024 - April 2024",
    points: [
      "Developed an iOS app with SwiftUI using OpenWeather API for real-time weather data.",
      "Implemented location services to fetch and display local weather conditions."
    ]
  },
  {
    title: "Library Management System",
    tech: "Object Oriented Programming (C++)",
    date: "Oct 2022",
    points: [
      "Managed books, users, and admins using class-based OOP principles.",
      "Integrated threading to prevent simultaneous access, ensuring system integrity."
    ]
  },
  {
    title: "Loan Approval Prediction",
    tech: "Deep Learning",
    date: "Jan 2024 - April 2024",
    points: [
      "Built models using Logistic Regression, SVM, and DNN with ROC-AUC of 0.87.",
      "Designed a custom DNN with advanced grid search for optimal performance."
    ]
  },
  {
    title: "Advanced Financial Analysis & Portfolio Optimization",
    tech: "Financial Engineering",
    date: "Jan 2024 - April 2024",
    points: [
      "Created a technical indicator from stock data (e.g., GOOGL, AAPL) with 98% accuracy.",
      "Optimized portfolios using Markowitz theory and CAPM, maximizing the Sharpe ratio."
    ]
  }
];

export default function Project() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-20 overflow-y-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition-transform duration-300 border border-white/20"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
              <span className="text-sm text-white/60">{project.date}</span>
            </div>
            <p className="text-sm text-emerald-300 mb-2">{project.tech}</p>
            <ul className="list-disc list-inside text-white/90 space-y-1 text-sm">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {project.github && (
              <a
                href={project.github}
                className="text-blue-400 underline text-sm mt-4 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
