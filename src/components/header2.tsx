"use client"
import React, { useState } from 'react';

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      <div className="navbar flex h-[10vh] items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div>
          <h2 className="font-bold text-2xl">Jadoo</h2>
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <nav className="hidden md:flex space-x-6">
          {['Destinations', 'Hotels', 'Flights', 'Bookings'].map((item) => (
            <div
              key={item}
              className="font-semibold hover:text-orange-500 hover:font-bold hover:border-[2px] hover:border-orange-500 px-4 py-1 rounded-sm cursor-pointer"
            >
              {item}
            </div>
          ))}
        </nav>

        {/* Login and Sign-Up (Hidden on small screens) */}
        <div className="hidden md:flex space-x-4">
          <div className="font-semibold hover:text-orange-500 hover:font-bold hover:border-[2px] hover:border-orange-500 px-4 py-1 rounded-sm cursor-pointer">
            Login
          </div>
          <div className="font-semibold border border-gray-500 px-4 py-1 rounded-sm hover:border-[2px] hover:border-orange-500 hover:text-orange-500 cursor-pointer">
            Sign Up
          </div>
          <select
            className="font-semibold hover:text-orange-500 hover:font-bold hover:border-[2px] hover:border-orange-500 px-1 py-1 rounded-sm"
            id="options"
            name="options"
          >
            <option value="option1">EN</option>
            <option value="option2">PK</option>
          </select>
        </div>

        {/* Hamburger Menu (Visible on small screens) */}
        <div className="md:hidden text-4xl cursor-pointer" onClick={toggleMenu}>
          &#8801;
        </div>
      </div>

      {/* Mobile Menu (Visible when hamburger is toggled) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md absolute top-[10vh] left-0 w-full">
          <ul className="flex flex-col space-y-4 py-4 items-center">
            {['Destinations', 'Hotels', 'Flights', 'Bookings'].map((item) => (
              <li
                key={item}
                className="font-semibold hover:text-orange-500 hover:font-bold hover:border-[2px] hover:border-orange-500 px-4 py-1 rounded-sm cursor-pointer"
              >
                {item}
              </li>
            ))}
            <li className="font-semibold hover:text-orange-500 hover:font-bold hover:border-[2px] hover:border-orange-500 px-4 py-1 rounded-sm cursor-pointer">
              Login
            </li>
            <li className="font-semibold border border-gray-500 px-4 py-1 rounded-sm hover:border-[2px] hover:border-orange-500 hover:text-orange-500 cursor-pointer">
              Sign Up
            </li>
            <select
              className="font-semibold hover:text-orange-500 hover:font-bold hover:border-[2px] hover:border-orange-500 px-1 py-1 rounded-sm"
              id="options"
              name="options"
            >
              <option value="option1">EN</option>
              <option value="option2">PK</option>
            </select>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header2;
