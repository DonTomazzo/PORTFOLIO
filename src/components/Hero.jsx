// src/components/Hero.jsx
import React from 'react';
import backgroundVideo from '../assets/background-video.mp4'; // Importera din bakgrundsvideo

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="flex flex-col items-center justify-center h-screen text-white p-6 relative overflow-hidden"
    >
      {/* Bakgrundsvideo-element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Din webbläsare stöder inte video-taggen.
      </video>

      {/* Ett semi-transparent overlay för att göra texten mer läsbar */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Letar ni efter en  <span className="text-teal-400">kreativ projektledare?</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-8">
          En passionerad fullstack-utvecklare med fokus på moderna webbteknologier.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="#projects"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Se mina projekt
          </a>
          <a
            href="#contact"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Kontakta mig
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;