import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaEllipsisH, FaMoon, FaSun, FaGlobe } from "react-icons/fa";
import Vite from '../assets/vite.svg'; 


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    // Add event listener when menu is open
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="flex items-center justify-between px-6 py-3 w-full bg-[#101010] text-white fixed top-0 left-0 right-0 z-50 font-sans border-b border-gray-700 h-14">
      {/* Logo and Search */}
      <div className="flex items-center space-x-6">
        <a href="/" className="flex items-center space-x-3">
          <img src={Vite} alt="Vite Logo" className="h-7" />
          <span className="text-lg font-semibold">Vite</span>
        </a>
        <div 
          className={`relative flex items-center rounded-md px-3 py-1 bg-[#161618] text-gray-300 w-40 h-8 transition-all duration-200 ${
            isSearchFocused ? 'border-1 border-purple-500' : 
            isSearchHovered ? 'border-1 border-purple-500' : ''
          }`}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          onMouseEnter={() => setIsSearchHovered(true)}
          onMouseLeave={() => setIsSearchHovered(false)}
        >
          <FaSearch className="text-gray-400 text-sm flex-shrink-0 " />
          <div className="flex justify-between items-center w-full ml-2 overflow-hidden">
            <span className="text-xs text-gray-400 flex-shrink-0">Search</span>
            <span className="text-xs text-gray-400 flex-shrink-0 border border-gray-800 px-1 rounded ml-1">Ctrl+K</span>
          </div>
        </div>
      </div>

      {/* Navigation Links & Menu - moved closer to menu icon */}
      <div className="flex items-center">
        <div className="hidden md:flex space-x-4 text-gray-300 text-sm font-medium mr-4">
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">Guide</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">API</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">Plugins</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-200">Resources</a>
        </div>

        {/* Meatballs Menu Icon (three dots) */}
        <div className="relative" ref={menuRef}>
          <button 
            className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaEllipsisH className="text-lg" />
          </button>

          {/* Menu Dropdown with smooth transition */}
          <div 
            className={`absolute top-full right-0 mt-2 bg-gray-800 w-48 rounded-md shadow-lg p-2 border border-gray-700 transition-all duration-300 ease-in-out transform origin-top-right ${
              menuOpen 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <button 
              className="flex items-center w-full px-3 py-2 text-sm text-left text-gray-300 hover:bg-purple-700 rounded transition-colors duration-200"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <>
                  <FaSun className="mr-2" /> Light Mode
                </>
              ) : (
                <>
                  <FaMoon className="mr-2" /> Dark Mode
                </>
              )}
            </button>
            
            <div className="border-b border-gray-700 my-1"></div>
            
            <button className="flex items-center w-full px-3 py-2 text-sm text-left text-gray-300 hover:bg-purple-700 rounded transition-colors duration-200">
              <FaGlobe className="mr-2" /> Language
            </button>
            
            <div className="border-b border-gray-700 my-1"></div>
            
            <a href="#" className="flex items-center w-full px-3 py-2 text-sm text-left text-gray-300 hover:bg-purple-700 rounded transition-colors duration-200">
              Settings
            </a>
            <a href="#" className="flex items-center w-full px-3 py-2 text-sm text-left text-gray-300 hover:bg-purple-700 rounded transition-colors duration-200">
              Documentation
            </a>
            <a href="#" className="flex items-center w-full px-3 py-2 text-sm text-left text-gray-300 hover:bg-purple-700 rounded transition-colors duration-200">
              Support
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="text-gray-300 text-lg md:hidden mr-6" 
        onClick={() => setIsOpen(!isOpen)}>
        <FaEllipsisH />
      </button>

      {/* Mobile Menu with smooth transition */}
      <div 
        className={`absolute top-full right-0 bg-[#101010] w-48 shadow-md p-3 space-y-2 md:hidden border border-gray-700 transition-all duration-300 ease-in-out transform ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <a href="#" className="block text-gray-300 hover:bg-gray-800 hover:text-purple-400 px-3 py-2 rounded transition-all duration-200">Guide</a>
        <a href="#" className="block text-gray-300 hover:bg-gray-800 hover:text-purple-400 px-3 py-2 rounded transition-all duration-200">API</a>
        <a href="#" className="block text-gray-300 hover:bg-gray-800 hover:text-purple-400 px-3 py-2 rounded transition-all duration-200">Plugins</a>
        <a href="#" className="block text-gray-300 hover:bg-gray-800 hover:text-purple-400 px-3 py-2 rounded transition-all duration-200">Resources</a>
      </div>
    </nav>
  );
}

export default Navbar;