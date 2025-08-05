// src/App.jsx
import React, { useRef, useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Knowledge from './components/Knowledge';
import Toast from './components/Toast';
import Confetti from 'react-confetti';
import backgroundMusic from './assets/background-music.mp3';
import VideoPopup from './components/VideoPopup';
import CompareImagePopup from './components/CompareImagePopup'; // NYTT

function App() {
  const audioRef = useRef(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showMusicToast, setShowMusicToast] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [isCompareImagePopupOpen, setIsCompareImagePopupOpen] = useState(false); // NYTT: Tillstånd för jämför-popup

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowMusicToast(true);
    }, 3000); 

    const hideTimer = setTimeout(() => {
      setShowMusicToast(false);
    }, 11000); 

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const handleConfettiClick = () => {
    setShowConfetti(true);
  };
  
  const toggleVideoPopup = () => {
    setIsVideoPopupOpen(!isVideoPopupOpen);
  };
  
  const toggleCompareImagePopup = () => { // NYTT: Funktion för att öppna/stänga jämför-popupen
    setIsCompareImagePopupOpen(!isCompareImagePopupOpen);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Ljud kunde inte spelas:", error);
        });
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans w-full scroll-smooth">
      {showConfetti && <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={500}
        confettiSource={{ x: 0, y: 0, w: window.innerWidth, h: 0 }}
        colors={['#FFD700', '#DAA520', '#B8860B', '#FFBF00']}
      />}

      <Navbar 
        isMusicPlaying={isMusicPlaying} 
        toggleMusic={toggleMusic} 
        toggleVideoPopup={toggleVideoPopup} 
      />
      <audio ref={audioRef} src={backgroundMusic} loop></audio>
      
      {/* SKICKAR NU FUNKTIONEN TILL HERO */}
      <Hero toggleCompareImagePopup={toggleCompareImagePopup} />
      
      <Knowledge onConfettiClick={handleConfettiClick} />
      <About />
      <Projects />
      <Contact />
      
      {showMusicToast && (
        <Toast
          message="Klicka här för att spela musik!"
          color="bg-purple-600"
          isBlinking={true}
          position="top-left"
        />
      )}
      
      <VideoPopup isOpen={isVideoPopupOpen} onClose={toggleVideoPopup} />
      {/* RENDERAR DEN NYA POPUPEN */}
      <CompareImagePopup isOpen={isCompareImagePopupOpen} onClose={toggleCompareImagePopup} />
    </div>
  );
  
}

export default App;