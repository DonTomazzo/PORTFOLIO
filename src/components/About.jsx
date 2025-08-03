// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 md:px-20 lg:px-40" id="about">
      <h2 className="text-4xl font-bold mb-8 text-center">Om mig</h2>
      <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6">
        <p>
          Jag brinner för att bygga säkra och effektiva webbapplikationer. Med en bakgrund inom...
        </p>
        <p>
          Mina expertområden inkluderar React, Node.js, och databashantering, men jag har en särskild passion för cybersäkerhet och penetrationstestning.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <span className="bg-gray-800 text-teal-400 px-4 py-2 rounded-full">React</span>
          <span className="bg-gray-800 text-teal-400 px-4 py-2 rounded-full">Tailwind CSS</span>
          <span className="bg-gray-800 text-teal-400 px-4 py-2 rounded-full">Node.js</span>
          <span className="bg-gray-800 text-teal-400 px-4 py-2 rounded-full">Säkerhet</span>
        </div>
      </div>
    </section>
  );
};

export default About;