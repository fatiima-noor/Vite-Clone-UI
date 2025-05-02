import React, { useState, useEffect } from 'react';
import Spark from '../../assets/spark.svg';
import leftLine1 from '../../assets/leftLine1.svg';
import leftLine2 from '../../assets/leftLine2.svg';
import leftLine3 from '../../assets/leftLine3.svg';
import leftLine4 from '../../assets/leftLine4.svg';
import leftLine5 from '../../assets/leftLine5.svg';
import rightLine1 from '../../assets/rightLines1.svg';
import rightLine2 from '../../assets/rightLines2.svg';
import rightLine3 from '../../assets/rightLines3.svg';
import rightLine4 from '../../assets/rightLines4.svg';
import rightLine5 from '../../assets/rightLines5.svg';


function FeatureBox4() {
  const [active, setActive] = useState(false);
  const [flickerStage, setFlickerStage] = useState(0); // 0=initial, 1=first color, 2=no color, 3=final color
  
  // Handle hover activation with flicker animation
  const handleActivation = () => {
    if (!active) {
      setActive(true);
      
      // Start flicker sequence
      // First flash of color
      setFlickerStage(1);
      
      // Back to no color
      setTimeout(() => {
        setFlickerStage(2);
      }, 150);
      
      // Second flash of color
      setTimeout(() => {
        setFlickerStage(3);
      }, 300);
    }
  };
  
  return (
    <div
      className="relative flex flex-col items-center justify-center bg-[#121212] rounded-lg transition-all duration-500 overflow-hidden"
      style={{ width: "529.45px", height: "348.78px" }}
      onMouseEnter={handleActivation}
      onClick={handleActivation}
    >
      {/* Central lightning icon with enhanced glow effect */}
      <div className="flex items-center justify-center mb-24">
        {/* Outermost glow - very diffuse */}
        <div 
          className={`absolute rounded-full transition-all duration-500 ${
            flickerStage === 0 ? 'opacity-10' : 
            flickerStage === 2 ? 'opacity-10' : 'opacity-20'
          }`}
          style={{
            width: '320px',
            height: '320px',
            background: 'radial-gradient(circle, rgba(255,235,59,0.2) 0%, rgba(255,235,59,0) 80%)',
            filter: 'blur(40px)'
          }}
        />
        
        {/* Middle glow layer - moderately diffuse */}
        <div 
          className={`absolute rounded-full transition-all duration-400 ${
            flickerStage === 0 ? 'opacity-15' : 
            flickerStage === 2 ? 'opacity-15' : 'opacity-30'
          }`}
          style={{
            width: '240px',
            height: '240px',
            background: 'radial-gradient(circle, rgba(255,235,59,0.4) 0%, rgba(255,235,59,0) 75%)',
            filter: 'blur(25px)'
          }}
        />
        
        {/* Inner glow - more defined */}
        <div 
          className={`absolute rounded-full transition-all duration-350 ${
            flickerStage === 0 ? 'opacity-20' : 
            flickerStage === 2 ? 'opacity-20' : 'opacity-40'
          }`}
          style={{
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle, rgba(255,235,59,0.6) 10%, rgba(255,235,59,0.1) 70%, rgba(255,235,59,0) 85%)',
            filter: 'blur(15px)'
          }}
        />
        
        {/* Sharp edge glow - focused near the icon */}
        <div 
          className={`absolute rounded-full transition-all duration-300 ${
            flickerStage === 0 ? 'opacity-0' : 
            flickerStage === 2 ? 'opacity-0' : 'opacity-50'
          }`}
          style={{
            width: '140px',
            height: '140px',
            background: 'radial-gradient(circle, rgba(255,235,59,0.8) 0%, rgba(255,235,59,0.2) 50%, rgba(255,235,59,0) 70%)',
            filter: 'blur(5px)'
          }}
        />
        
        {/* Using the imported Spark SVG with enhanced styling */}
        <div 
          className="relative z-10 transition-all duration-100 scale-125"
        >
          <img 
            src={Spark} 
            alt="Lightning bolt" 
            className="w-40 h-40 transition-all duration-300"
            style={{
              filter: flickerStage === 0 || flickerStage === 2 
                ? 'drop-shadow(0 0 8px rgba(255, 235, 59, 0.5)) grayscale(0.8) brightness(0.8)' 
                : flickerStage === 1
                  ? 'drop-shadow(0 0 12px rgba(255, 235, 59, 0.7)) drop-shadow(0 0 3px rgba(255, 255, 255, 0.6)) invert(80%) sepia(71%) saturate(456%) hue-rotate(359deg) brightness(115%) contrast(105%)'
                  : 'drop-shadow(0 0 16px rgba(255, 235, 59, 0.9)) drop-shadow(0 0 4px rgba(255, 255, 255, 0.7)) invert(80%) sepia(71%) saturate(456%) hue-rotate(359deg) brightness(125%) contrast(115%)'
            }}
          />
        </div>
      </div>
      
      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center text-center z-10">
        <h2 className="text-white text-xl font-bold mb-1 transition-all duration-500">
          Optimized Build
        </h2>
        
        <p className="text-gray-400 text-base leading-tight">
          Pre-configured Rollup build with<br />
          multi-page and library mode support.
        </p>
      </div>
    </div>
  );
}

export default FeatureBox4;