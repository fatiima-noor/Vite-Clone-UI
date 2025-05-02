import React, { useState } from 'react';
import featureBox3a from '../../assets/featureBox3a.svg';
import CSSicon from '../../assets/CSSicon.svg';
import JSicon from '../../assets/JSicon.svg';
import TSicon from '../../assets/TSicon.svg';
import WAicon from '../../assets/WAicon.svg';
import featureBox3b from '../../assets/featureBox3b.svg';


function FeatureBox3() {
  const [active, setActive] = useState(false);

  // Toggle active state on hover or click
  const handleActivation = () => {
    setActive(true);
  };

  // Logo configurations with imported icons
  const logos = [
    { id: 'css', text: 'CSS', textColor: 'white', icon: CSSicon },
    { id: 'ts', text: 'TS', textColor: 'white', icon: TSicon },
    { id: 'js', text: 'JS', textColor: 'black', icon: JSicon },
    { id: 'wa', text: 'WA', textColor: 'white', icon: WAicon }
  ];

  return (
    <div
      className="relative bg-[#121212] rounded-lg transition-all duration-500 overflow-hidden"
      style={{ width: "529.45px", height: "348.78px" }}
      onMouseEnter={handleActivation}
      onClick={handleActivation}
    >
      {/* Subtle background glow effect - only visible when active */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-80 h-40 rounded-full bg-blue-700 opacity-20 blur-3xl"></div>
        <div className="absolute top-24 left-1/3 transform -translate-x-1/2 w-40 h-40 rounded-full bg-yellow-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-24 right-1/3 transform translate-x-1/2 w-40 h-40 rounded-full bg-purple-700 opacity-20 blur-3xl"></div>
      </div>

      {/* Left fade gradient mask - intensified */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#121212] to-transparent z-10"></div>
      
      {/* Right fade gradient mask - intensified */}
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#121212] to-transparent z-10"></div>
      
      {/* Bottom shadow fade for boxes - positioned to only affect boxes */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent z-10"
        style={{ bottom: '130px' }}
      ></div>

      {/* Grid of boxes */}
      <div className="absolute -top-3 right-0 transform -translate-x-1/2 grid grid-cols-6 gap-x-3 w-full"
        style={{ left: '16.5rem' }}
      >
        {/* Top row - 6 empty boxes */}
        <div className="col-span-6 flex justify-between">
          {[...Array(6)].map((_, i) => (
            <div 
              key={`top-${i}`} 
              className={`relative w-20 h-20 rounded-lg bg-[#1a1a1a] transition-all duration-500 ${
                active ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
              }`}
              style={{ 
                boxShadow: active ? '0 0 12px rgba(0,0,0,0.6)' : 'none',
                transitionDelay: `${i * 50}ms`,
                ...(i === 1 && {
                  border: '1px solid rgba(75, 75, 75, 0.3)'
                })
              }}
            >
              {/* Enhanced 2nd box (index 1) in the first row using imported SVG */}
              {i === 1 && (
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${active ? 'opacity-60' : 'opacity-0'}`}
                  style={{ transitionDelay: active ? '400ms' : '0ms' }}
                >
                  <img 
                    src={featureBox3a} 
                    alt="Code icon" 
                    className="w-12 h-12 transition-all duration-1000"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Middle row with 6 boxes: 1 empty, 4 logos, 1 empty */}
        <div className="col-span-6 flex justify-between mt-3">
          {/* Empty box at start */}
          <div 
            className={`w-16 h-20 rounded-lg bg-[#1a1a1a] transition-all duration-500 ${
              active ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
            }`}
            style={{ 
              boxShadow: active ? '0 0 12px rgba(0,0,0,0.6)' : 'none',
              transitionDelay: "150ms"
            }}
          />
          
          {/* 4 Logo boxes in the middle with matching bg color and subtle border */}
          {logos.map((logo, i) => (
            <div 
              key={`logo-${i}`}
              className={`relative w-20 h-20 rounded-lg bg-[#1a1a1a] transition-all duration-700 ${
                active ? 'opacity-100 scale-100' : 'opacity-90 scale-95'
              }`}
              style={{ 
                boxShadow: active ? '0 0 12px rgba(0,0,0,0.6)' : 'none',
                transitionDelay: `${250 + i * 100}ms`,
                border: '1px solid rgba(75, 75, 75, 0.3)'
              }}
            >
              <div className="flex items-center justify-center h-full">
                {/* Logo with same glow as box when active */}
                <img 
                  src={logo.icon} 
                  alt={`${logo.text} icon`}
                  className={`h-10 w-10 transition-all duration-500 ${active ? 'opacity-100' : 'opacity-80'}`}
                  style={{
                    filter: active ? 'drop-shadow(0 0 4px rgba(255,255,255,0.4))' : 'none',
                    transitionDelay: `${400 + i * 100}ms`
                  }}
                />
              </div>
            </div>
          ))}
          
          {/* Empty box at end */}
          <div 
            className={`w-20 h-20 rounded-lg bg-[#1a1a1a] transition-all duration-500 ${
              active ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
            }`}
            style={{ 
              boxShadow: active ? '0 0 12px rgba(0,0,0,0.6)' : 'none',
              transitionDelay: "650ms"
            }}
          />
        </div>

        {/* Bottom row - 6 empty boxes with gradient opacity on bottom */}
        <div className="col-span-6 flex justify-between mt-3">
          {[...Array(6)].map((_, i) => (
            <div 
              key={`bottom-${i}`} 
              className={`relative w-20 h-16 rounded-lg bg-[#1a1a1a] transition-all duration-500 ${
                active ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
              }`}
              style={{ 
                boxShadow: active ? '0 0 12px rgba(0,0,0,0.6)' : 'none',
                transitionDelay: `${750 + i * 50}ms`,
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0))',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0))',
                ...(i === 4 && {
                  border: '1px solid rgba(75, 75, 75, 0.3)'
                })
              }}
            >
              {/* Enhanced second-to-last box (index 4) in the last row with imported SVG */}
              {i === 4 && (
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${active ? 'opacity-60' : 'opacity-0'}`}
                  style={{ transitionDelay: active ? '900ms' : '0ms' }}
                >
                  <img 
                    src={featureBox3b} 
                    alt="Browser icon" 
                    className="w-9 h-9 transition-all duration-1000"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content wrapper - separate from the shadow effects, in front of them with z-index */}
      <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center text-center z-20">
        <h2 className="text-white text-xl font-bold mb-1 transition-all duration-500">
          Rich Features
        </h2>
        
        <p className="text-gray-400 text-base leading-tight">
          Out of the box support for<br />
          Typescript, JSX, CSS and more.
        </p>
      </div>
    </div>
  );
}

export default FeatureBox3;