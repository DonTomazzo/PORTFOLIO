// src/App.jsx
import React, { useRef, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Toast from './components/Toast'; 
import backgroundMusic from './assets/background-music.mp3';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Autouppspelning av ljud blockerades:", error);
      });
    }
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans w-full scroll-smooth">
      <Navbar /> {/* Använd Navbar här */}
      <audio ref={audioRef} src={backgroundMusic} autoPlay loop muted></audio>
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <Toast message="Klicka här för att öppna menyn!" type="info" duration={4000} />
    </div>
  );
}

export default App;