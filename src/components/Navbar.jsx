// src/components/Navbar.jsx
import React from 'react';
import Header from './Header';
import SocialIcons from './SocialIcons';

const Navbar = () => {
  return (
    <div 
      className="sticky top-0 z-50 flex justify-between items-center px-6 py-4"
    >
      <SocialIcons />
      <Header />
    </div>
  );
};

export default Navbar;