// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 px-4 md:px-20 lg:px-40 text-center" id="contact">
      <h2 className="text-4xl font-bold mb-8">Kontakta mig</h2>
      <p className="text-lg text-gray-400 mb-8">
        Jag är alltid öppen för nya möjligheter. Skicka ett mejl eller connecta med mig!
      </p>
      <a 
        href="mailto:din.email@exempel.com" 
        className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
      >
        Skicka ett mejl
      </a>
      <div className="mt-8 flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
          {/* Här kan du lägga till ikoner från t.ex. Heroicons eller Font Awesome */}
          <span>LinkedIn</span>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;