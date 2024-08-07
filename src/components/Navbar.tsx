import React, { useState } from 'react';
import logo from '/logo.svg';
import menuIcon from '/hamburger.svg';
import closeIcon from '/cross.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State to control visibility

  const toggleMenu = () => {
    if (!menuOpen) {
      setShowMenu(true);
      setTimeout(() => {
        setMenuOpen(true);
      }, 100);
    } else {
      setMenuOpen(false);
      setTimeout(() => {
        setShowMenu(false);
      }, 300); // Match the transition duration
    }
  };

  return (
    <div className="sticky left-0 top-0 w-full">
      <div className="absolute left-0 top-0 flex h-[12svh] w-[98svw] items-center p-4 sm:px-8">
        {menuOpen && (
          <div className="absolute inset-0 h-[100vh] w-full bg-gray-800 bg-opacity-90"></div>
        )}
        <div className="flex h-full w-full justify-between">
          {/* left side */}
          <div className="flex items-center gap-2">
            <div className="h-8">
              <img src={logo} alt="Logo" className="h-full w-full" />
            </div>
            <div className="font-anton text-3xl">bluseel</div>
          </div>

          {/* right side */}
          <div className="flex items-center">
            <div className="font-lucida flex h-[35px] items-center gap-2 text-[0.8rem]">
              <div className="flex h-full w-[130px] items-center rounded-lg bg-primary px-4 text-center text-white transition-all hover:cursor-pointer hover:bg-primary/80">
                Schedule a Call
              </div>
              <div className="hidden w-[130px] rounded-lg border-[1px] border-primary px-4 py-2 text-center text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-white sm:block">
                Contact
              </div>
              <div
                className="z-10 h-full rounded-lg bg-primary p-2 text-white transition-all hover:cursor-pointer hover:bg-primary/80"
                onClick={toggleMenu}
              >
                <img
                  src={menuOpen ? closeIcon : menuIcon}
                  alt="Menu Icon"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu bar */}
      <div
        className={`px absolute right-0 h-screen w-full transform bg-blue-200 p-8 pt-4 transition-transform duration-300 sm:w-96 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${showMenu ? 'block' : 'hidden'}`} // Control visibility and transition
        style={{
          backgroundImage: 'url(/foryou.png)',
          backgroundSize: '300%', // Scale the background image
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex justify-start">
          <div className="h-10">
            <img src={logo} className="h-full w-full" alt="" />
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

export default Navbar;
