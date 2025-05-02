import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Vite from '../assets/vite.svg'; 

function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxScrollProgress, setMaxScrollProgress] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      // Calculate scroll progress as a value between 0 and 1
      const progress = Math.min(position / (window.innerHeight * 0.4), 1);
      setScrollProgress(progress);
      
      // Track the maximum scroll progress achieved
      if (progress > maxScrollProgress) {
        setMaxScrollProgress(progress);
      }
      
      // Logo appears gradually starting at 20% of screen height
      if (position > window.innerHeight * 0.2) {
        setLogoVisible(true);
      } else {
        // Don't hide the logo when scrolling back up
        // setLogoVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [maxScrollProgress]);

  // Use maxScrollProgress for opacity calculations to ensure they don't decrease
  const logoOpacity = Math.min(maxScrollProgress * 2, 1); // Faster fade-in for logo
  const mainGlowOpacity = Math.max(0, (maxScrollProgress - 0.2) * 1.25); // Delayed start, faster ramp
  const directionalGlowOpacity = Math.max(0, (maxScrollProgress - 0.3) * 1.4); // More delayed
  const wideGlowOpacity = Math.max(0, (maxScrollProgress - 0.4) * 1.5); // Most delayed
  const bottomGlowOpacity = Math.max(0, (maxScrollProgress - 0.25) * 1.3); // Slightly delayed
  
  // Use current scrollProgress only for position-related transformations
  const currentScrollY = scrollProgress * window.innerHeight * 0.15;
  
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden" ref={heroRef}>
      {/* Main background glow - appears gradually with scroll and persists */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          opacity: mainGlowOpacity * 0.9,
          background: `radial-gradient(ellipse at center bottom, 
            rgba(65, 209, 255, 0.4) 0%, 
            rgba(189, 52, 254, 0.25) 40%, 
            rgba(0, 0, 0, 0) 80%)`,
          zIndex: 1,
          height: '200vh',
          width: '140vw',
          left: '-20vw',
          top: '-30vh',
          filter: 'blur(60px)',
          transform: `translateY(${currentScrollY}px)`
        }}
      />
      
      {/* Upward flowing glow from logo section - radiates gradually and persists */}
      <div 
        className="absolute inset-x-0 pointer-events-none transition-all duration-1000"
        style={{
          opacity: mainGlowOpacity * 0.8,
          background: 'radial-gradient(ellipse at center bottom, rgba(65, 209, 255, 0.35) 0%, rgba(189, 52, 254, 0.2) 40%, rgba(0, 0, 0, 0) 85%)',
          zIndex: 2,
          height: '160vh',
          width: '150vw',
          left: '-25vw',
          bottom: '-20vh',
          filter: 'blur(70px)',
          transform: `translateY(${-scrollProgress * window.innerHeight * 0.08}px)`
        }}
      />
      
      <Navbar className="relative z-10" />
      
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pb-0 pt-20">
        {/* Hero Text */}
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Building The Future</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-300">
            Create faster, build better, and deploy with confidence using our cutting-edge development tools.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
              Get Started
            </button>
            <button className="border border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-lg transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Logo section - with gradually sequenced appearance that persists */}
      <div className="min-h-screen flex items-center justify-center relative pt-0 mt-0">
        {/* Logo - appears gradually and stays visible */}
        <div 
          ref={logoRef}
          className="transition-all duration-1000"
          style={{
            opacity: logoOpacity,
            transform: `scale(${0.8 + (logoOpacity * 0.2)})`,
            zIndex: 10,
            marginTop: '-18rem', // Equivalent to -mt-72
          }}
        >
          <div className="relative flex items-center justify-center">
            {/* Square container for logo */}
            <div className="w-28 h-28 bg-gray-900 rounded-xl flex items-center justify-center relative shadow-2xl overflow-hidden"
                 style={{
                   boxShadow: `0 15px 45px rgba(0, 0, 0, 0.6), 
                              0 0 ${10 + logoOpacity * 20}px rgba(65, 209, 255, ${logoOpacity * 0.5}), 
                              0 0 0 1px rgba(189, 52, 254, ${logoOpacity * 0.2})`
                 }}>
              {/* Vite logo */}
              <img 
                src={Vite}  
                alt="Vite Logo" 
                className="w-20 h-20 relative z-20"
              />
              
              {/* Inner glow effect - visible with logo */}
              <div 
                className="absolute inset-0 z-10 transition-opacity duration-500"
                style={{
                  opacity: logoOpacity * 0.8,
                  background: 'radial-gradient(circle at center, rgba(65, 209, 255, 0.5) 0%, rgba(189, 52, 254, 0.3) 50%, transparent 80%)',
                  filter: 'blur(15px)',
                }}
              />
            </div>
            
            {/* LEFT-RIGHT DIRECTIONAL GLOW - blue on left, purple on right - persists once activated */}
            <div 
              className="absolute inset-0 transition-all duration-1000"
              style={{
                animation: maxScrollProgress > 0.3 ? 'pulse 3s infinite alternate ease-in-out' : 'none',
                filter: 'blur(40px)',
                background: 'linear-gradient(90deg, rgba(65, 209, 255, 0.7) 0%, rgba(127, 130, 255, 0.5) 50%, rgba(189, 52, 254, 0.7) 100%)',
                transform: `scale(${1 + directionalGlowOpacity})`,
                opacity: directionalGlowOpacity * 0.9,
                zIndex: 5
              }}
            />
            
            {/* Additional outer glow layer with directional effect - expanded gradually and persists */}
            <div 
              className="absolute inset-0 transition-all duration-1000"
              style={{
                animation: maxScrollProgress > 0.4 ? 'pulse-wide 4s infinite alternate ease-in-out' : 'none',
                filter: 'blur(70px)',
                background: 'linear-gradient(90deg, rgba(65, 209, 255, 0.4) 0%, rgba(127, 130, 255, 0.2) 50%, rgba(189, 52, 254, 0.4) 100%)',
                transform: `scale(${2 + wideGlowOpacity * 1.5})`,
                opacity: wideGlowOpacity * 0.7,
                zIndex: 4
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Bottom glow that fades in gradually and remains */}
      <div 
        className="absolute inset-x-0 bottom-0 pointer-events-none transition-all duration-1000"
        style={{
          opacity: bottomGlowOpacity * 0.8,
          background: 'radial-gradient(ellipse at center bottom, rgba(65, 209, 255, 0.3) 0%, rgba(189, 52, 254, 0.2) 40%, rgba(0, 0, 0, 0) 80%)',
          height: '60vh',
          width: '140vw',
          left: '-20vw',
          filter: 'blur(80px)',
          zIndex: 1
        }}
      />
      
      {/* Global keyframes for animations - only active after certain scroll threshold */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: ${Math.min(directionalGlowOpacity * 0.7, 0.7)};
            transform: scale(${1 + directionalGlowOpacity * 0.8});
          }
          100% {
            opacity: ${Math.min(directionalGlowOpacity * 0.9, 0.9)};
            transform: scale(${1 + directionalGlowOpacity * 1.1});
          }
        }
        
        @keyframes pulse-wide {
          0% {
            opacity: ${Math.min(wideGlowOpacity * 0.5, 0.5)};
            transform: scale(${2.5 + wideGlowOpacity * 0.7});
          }
          100% {
            opacity: ${Math.min(wideGlowOpacity * 0.7, 0.7)}; 
            transform: scale(${2.5 + wideGlowOpacity * 1.3});
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;