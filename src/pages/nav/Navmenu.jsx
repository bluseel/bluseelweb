import React, { useState } from 'react';
import logo from '/logo.svg';
import menuIcon from '/hamburger.svg';
import closeIcon from '/cross.svg';

const Navmenu = (isMenuOpen) => {
  const [menuOpen, setMenuOpen] = useState(isMenuOpen);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const allPages = [
    { name: 'Home', link: '/' },
    { name: 'Buy', link: '/buy' },
    { name: 'Sell', link: '/sell' },
    { name: 'Reach out', link: '/contact' },
    { name: 'Our Team of Experts', link: '/team' },
  ];

  return (
    <div className="">
      {/* nav */}
      <div
        className={`absolute right-0 top-0 h-[100svh] w-96 transform bg-blue-200 p-4 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="flex justify-end">
          <div
            className="h-[35px] w-9 rounded-lg bg-primary p-1 text-white transition-all hover:cursor-pointer hover:bg-primary/80"
            onClick={toggleMenu}
          >
            <img src={closeIcon} alt="Close Icon" className="h-full w-full" />
          </div>
        </div>
        <nav className="mt-4 space-y-4">
          <a href="#packages" className="block text-xl font-bold text-black">
            Packages
          </a>
          <a href="#process" className="block text-xl font-bold text-black">
            Process
          </a>
          <a href="#work" className="block text-xl font-bold text-black">
            Our Work
          </a>
          <a href="#about" className="block text-xl font-bold text-black">
            About
          </a>
          <a href="#contact" className="block text-xl font-bold text-black">
            Contact
          </a>
          <a href="#terms" className="block text-xl font-bold text-black">
            Terms and Conditions
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navmenu;
