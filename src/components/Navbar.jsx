// src/components/Navbar.jsx
import React from 'react';
import Header from './Header';
import SocialIcons from './SocialIcons';
import { FaMusic, FaPauseCircle } from 'react-icons/fa';

const Navbar = ({ isMusicPlaying, toggleMusic }) => {
  return (
    // Ta bort "bg-gray-900 bg-opacity-70 backdrop-blur-md"
    <div className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4">
      <div className="flex items-center space-x-4">
        <SocialIcons />
        <button onClick={toggleMusic} className="text-white focus:outline-none">
          {isMusicPlaying ? <FaPauseCircle size={28} /> : <FaMusic size={28} />}
        </button>
      </div>

      <div>
        <Header />
      </div>
    </div>
  );
};

export default Navbar;