import React, { useState, useEffect } from 'react';

function FeatureBox1() {
  const [hovered, setHovered] = useState(false);
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorBlink(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white p-8">
      {/* Main Box with exact dimensions */}
      <div 
        className="relative bg-[#121212] rounded-lg transition-all duration-700"
        onMouseEnter={() => setHovered(true)}
        style={{ 
          width: "529.45px",
          height: "348.78px"
        }}
      >
        {/* Increased top/left padding to create more space */}
        <div className="absolute inset-0 pt-8 pl-8 pr-0 pb-4">
          {/* Inner box with adjusted dimensions */}
          <div 
            className={`relative bg-[#1a1a1a] rounded-l-md rounded-r-none z-10 overflow-hidden transition-all duration-500
                        ${hovered ? 'border-l border-t border-b border-[#13b351]' : 'border-0'}`}
            style={{ 
                boxShadow: hovered ? '-6px -6px 12px -6px rgba(19,179,81,0.3), 0px -6px 12px -6px rgba(19,179,81,0.3), 0px 6px 12px -6px rgba(19,179,81,0.3)' : 'none',
                height: "60%",
                width: "100%" // takes full available width
            }}
            >

            {/* Softer, more smudged green glow effect along bottom edge */}
            <div 
              className={`absolute bottom-0 right-0 w-full h-16 transition-opacity duration-1000 ease-in-out ${hovered ? 'opacity-100' : 'opacity-0'}`}
              style={{
                background: 'radial-gradient(ellipse at bottom right, rgba(19,179,81,0.4) 0%, rgba(19,179,81,0.15) 40%, transparent 80%)',
                filter: 'blur(6px)',
                transform: 'translateY(30%)',
                zIndex: 5,
                transitionDelay: hovered ? '250ms' : '0ms'
              }}
            ></div>

            <div className="p-5">
              {/* Thinner skeleton lines */}
              <div className="h-3 w-56 bg-gray-700 rounded-full mb-3"></div>
              <div className="h-3 w-72 bg-gray-700 rounded-full mb-12"></div>
              
              {/* Command line text - aligned right below skeleton lines */}
              <div className={`absolute bottom-8 left-12 transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
                <div className="text-gray-100 flex items-center text-sm">
                  &gt; npm run dev
                  <span className={`ml-1 w-0.5 h-4 inline-block ${cursorBlink ? 'bg-gray-500' : 'bg-transparent'}`}></span>
                  {/* Enter key with light pulse */}
                  <span className="ml-2 w-8 h-7 border border-gray-800 rounded text-2xl inline-flex items-center justify-center animate-pulse  leading-[1.75rem]">
                    ↵
                  </span>
                </div>
              </div>
              
              {/* Ready in 96ms text - only visible when hovered */}
              <div className={`absolute left-12 bottom-8 text-[#13b351] text-lg font-medium transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
                Ready in 96ms
              </div>
            </div>
          </div>
          
          {/* Text content with adjusted positioning */}
          <div className="absolute bottom-8 left-12">
            <h2 className="text-xl font-bold mb-1">Instant server start</h2>
            <p className="text-gray-400 text-base whitespace-nowrap leading-tight ">
              On demand file serving over native ESM,
            </p>
            <p className="text-gray-400 text-base leading-tight">
              no bundling required!
            </p>
          </div>
        </div>
        
        {/* Green vertical line with adjusted height */}
        <div 
          className={`absolute bottom-0 right-10 w-0.5  bg-[#13b351] transition-all duration-700 ease-in-out
                     ${hovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            height: hovered ? '41%' : '0',
            boxShadow: hovered ? '0 0 8px rgba(19,179,81,0.4)' : 'none',
            transformOrigin: 'bottom',
            transitionDelay: hovered ? '100ms' : '0ms'
          }}
        ></div>
      </div>
    </div>
  );
}

export default FeatureBox1;
