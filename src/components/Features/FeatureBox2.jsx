import React, { useState } from 'react';

function IDEFeatureBox() {
  const [active, setActive] = useState(false);

  // Toggle active state on hover or click
  const handleActivation = () => {
    setActive(true);
  };

  return (
    <div
      className="relative bg-[#121212] rounded-lg transition-all duration-500 overflow-hidden"
      style={{ width: "529.45px", height: "348.78px" }}
      onMouseEnter={handleActivation}
      onClick={handleActivation}
    >
      {/* Enhanced spread glow effect - MOVED HIGHER */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}>
        {/* Main glow from corner box - MOVED HIGHER */}
        <div className="absolute top-0 right-20 w-96 h-96 rounded-full bg-[#41D1FF] opacity-10 blur-3xl -translate-y-20"></div>
        
        {/* Additional secondary glows - MOVED HIGHER */}
        <div className="absolute top-0 right-40 w-64 h-64 rounded-full bg-[#41D1FF] opacity-5 blur-3xl -translate-y-10"></div>
        <div className="absolute top-10 left-1/2 w-80 h-80 rounded-full bg-[#41D1FF] opacity-5 blur-3xl"></div>
      </div>
      
      {/* Enclosing box for skeleton lines */}
      <div className="absolute top-16 left-6 bg-[#1a1a1a] pt-3 pb-3 rounded-md" style={{ width: "270px" }}>
        {/* Line numbers with lines - now animated FIRST */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <span className="text-gray-500 text-xs w-6 text-right pr-2">1</span>
            <div className={`h-4 w-48 rounded-sm transition-all duration-700 ${active ? 'bg-[#41D1FF]' : 'bg-gray-800'}`}
                 style={{ 
                   boxShadow: active ? '0 0 12px 2px rgba(59, 130, 246, 0.4)' : 'none',
                   transitionDelay: active ? '0ms' : '300ms'
                 }}></div>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-500 text-xs w-6 text-right pr-2">2</span>
            <div className={`h-4 w-36 rounded-sm transition-all duration-700 ${active ? 'bg-[#41D1FF]' : 'bg-gray-800'}`}
                 style={{ 
                   boxShadow: active ? '0 0 12px 2px rgba(59, 130, 246, 0.4)' : 'none',
                   transitionDelay: active ? '200ms' : '200ms'
                 }}></div>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-500 text-xs w-6 text-right pr-2">3</span>
            <div className={`h-4 w-56 rounded-sm transition-all duration-700 ${active ? 'bg-green-500' : 'bg-gray-800'}`}
                 style={{ 
                   boxShadow: active ? '0 0 12px 2px rgba(74, 222, 128, 0.4)' : 'none',
                   transitionDelay: active ? '400ms' : '100ms'
                 }}></div>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-500 text-xs w-6 text-right pr-2">4</span>
            <div className={`h-4 w-28 rounded-sm transition-all duration-700 ${active ? 'bg-purple-500' : 'bg-gray-800'}`}
                 style={{ 
                   boxShadow: active ? '0 0 12px 2px rgba(168, 85, 247, 0.4)' : 'none',
                   transitionDelay: active ? '600ms' : '0ms'
                 }}></div>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 text-xs w-6 text-right pr-2">5</span>
          </div>
        </div>
      </div>
      
      {/* Improved container box for right side elements with better spacing */}
      <div 
        className="absolute top-0 right-0 bg-[#1a1a1a] rounded-bl-lg rounded-tr-lg p-0 h-52"
        style={{ 
          width: "192px", 
          borderLeft: "2.5px solid #2d2d2d", 
          borderBottom: "2.5px solid #2d2d2d" 
        }}
      >
        {/* Corner blue box - now with delayed animation */}
        <div className={`w-40 h-24 transition-all duration-700 rounded-bl-md rounded-tr-lg ${active ? 'bg-[#41D1FF]' : 'bg-gray-800'} ml-auto`} 
            style={{ 
              boxShadow: active ? '0 0 12px 2px rgba(59, 130, 246, 0.4)' : 'none',
              transitionDelay: active ? '1400ms' : '0ms'
            }}>
        </div>

        {/* Content inside container with reduced gaps */}
        <div className="px-4 py-2">
          {/* Skeleton line below the corner box - with delay */}
          <div className={`ml-8 w-36 h-4 rounded-sm transition-all duration-700 ${active ? 'bg-[#41D1FF]' : 'bg-gray-700'}`}
               style={{ 
                 boxShadow: active ? '0 0 12px 2px rgba(45, 212, 191, 0.4)' : 'none',
                 transitionDelay: active ? '1600ms' : '150ms'
               }}></div>
          
          {/* Additional skeleton box - narrower and left-aligned - no glow effect */}
          <div className="ml-3 mt-4 w-28 h-16 rounded-md bg-gradient-to-b from-gray-700 to-transparent"></div>
        </div>
      </div>
      
      {/* Connecting lines with corrected positions and drawing animation */}
      <div className="absolute inset-0">
        {/* First connecting line - with original position */}
        <div className="absolute top-28 left-52 right-48 h-0.5 overflow-hidden">
          <div className={`h-full rounded-full transition-transform duration-1000 ${active ? 'translate-x-0' : '-translate-x-full'}`}
               style={{ 
                 background: 'linear-gradient(to right, rgba(96, 165, 250, 0.8) 0%, rgba(45, 212, 191, 0.5) 50%, rgba(168, 85, 247, 0.3) 100%)',
                 boxShadow: '0 0 8px 1px rgba(96, 165, 250, 0.4)',
                 transitionDelay: active ? '800ms' : '0ms'
               }}></div>
        </div>
        
        {/* Second connecting line - with original position */}
        <div className="absolute top-40 left-44 right-48 h-0.5 overflow-hidden">
          <div className={`h-full rounded-full transition-transform duration-1000 ${active ? 'translate-x-0' : '-translate-x-full'}`}
               style={{ 
                 background: 'linear-gradient(to right, rgba(168, 85, 247, 0.7) 0%, rgba(96, 165, 250, 0.4) 60%, rgba(45, 212, 191, 0.2) 100%)',
                 boxShadow: '0 0 8px 1px rgba(168, 85, 247, 0.4)',
                 transitionDelay: active ? '1000ms' : '0ms'
               }}></div>
        </div>
      </div>
      
      {/* Content wrapper - z-index added to keep text above glow */}
      <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center text-center z-10">
        <h2 className="text-white text-xl font-bold mb-1 transition-all duration-500">
          Lightning fast HMR
        </h2>
        
        <p className="text-gray-400 text-base leading-tight">
          Hot Module Replacement (HMR) that<br />
          stays fast regardless of app size.
        </p>
      </div>
    </div>
  );
}

export default IDEFeatureBox;