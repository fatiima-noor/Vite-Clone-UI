import React, { useState } from 'react';
import Vite from '../assets/vite.svg';

const ViteLanding = () => {
  const [glowsVisible, setGlowsVisible] = useState(false);

  const handleSectionHover = () => {
    if (!glowsVisible) {
      setGlowsVisible(true);
    }
  };

  return (
    <div 
      className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4 overflow-hidden"
      onMouseEnter={handleSectionHover}
    >
      {/* Refined Background glows - initially hidden, then visible after hover */}
      <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${glowsVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Primary left glow - cooler tone */}
        <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-cyan-500 opacity-20 blur-[100px] rounded-full"></div>
        
        {/* Primary right glow - deeper purple */}
        <div className="absolute top-1/3 -right-20 w-[28rem] h-[28rem] bg-indigo-600 opacity-20 blur-[100px] rounded-full"></div>
        
        {/* Center accent glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] bg-gradient-to-r from-blue-500 to-violet-600 opacity-15 blur-[120px] rounded-full"></div>
        
        {/* Subtle ambient glows for depth */}
        <div className="absolute bottom-0 left-1/3 w-[20rem] h-[20rem] bg-blue-400 opacity-10 blur-[80px] rounded-full"></div>
        <div className="absolute top-10 right-1/3 w-[18rem] h-[18rem] bg-fuchsia-500 opacity-10 blur-[90px] rounded-full"></div>
      </div>

      {/* Logo with refined glow effect */}
      <div className="relative mb-12 z-10">
        {/* Smoother outer glow layers */}
        <div className="absolute inset-0 scale-150 bg-indigo-500 opacity-25 blur-[30px] rounded-full"></div>
        <div className="absolute inset-0 scale-125 bg-blue-500 opacity-20 blur-[20px] rounded-full"></div>
        
        {/* Logo container - smaller, more refined */}
        <div className="relative bg-gray-900 bg-opacity-40 p-4 rounded-2xl backdrop-blur-md border border-gray-800 border-opacity-60 shadow-xl">
          {/* Logo wrapper with subtle animations */}
          <div className="relative w-14 h-14 mx-auto">
            {/* Inner glow for logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-50 blur-md rounded-full"></div>
            
            {/* Actual logo - removed blur for clarity */}
            <img 
              src={Vite} 
              alt="Vite Logo" 
              className="relative w-12 h-12 mx-auto my-1 filter drop-shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      <h2 className="font-manrope text-5xl font-semibold tracking-tight leading-tight mt-0 mb-2 text-center relative w-auto mx-auto">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">Got </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">More </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">Questions?</span>
      </h2>

      <p className="text-xl text-gray-400 text-center mb-3">
        Feel free to reach out anytime – we're here to help!
      </p>
      
      {/* Button with enhanced gradient */}
      <button 
        className="relative flex items-center justify-center px-4 py-2.5 w-fit rounded-lg text-white font-medium leading-6 cursor-pointer transform transition-all duration-200 hover:-translate-y-1 hover:opacity-90 shadow-lg"
        style={{
          textShadow: '0 0 2px rgba(0, 0, 0, 0.2)',
          backgroundImage: 'radial-gradient(141.42% 141.42% at 100% 0%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)), radial-gradient(140.35% 140.35% at 100% 94.74%, #bd34fe, rgba(189, 52, 254, 0)), radial-gradient(89.94% 89.94% at 18.42% 15.79%, #41d1ff, rgba(65, 209, 255, 0))'
        }}
      >
        Contact Us
      </button>
    </div>
  );
};

export default ViteLanding;