import React from 'react';
import Navbar from './Navbar';


function Hero() {
  return (
    <div className="bg-[#101010] min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center relative pt-24">
        {/* ViteConf Badge - Same size but with reduced bottom margin */}
        <div className="inline-flex items-center px-3 py-1.5 rounded-full mb-4 relative overflow-hidden"
             style={{
               background: 'radial-gradient(1686.42% 113.39% at 83.25% 2.56%, rgba(189, 52, 254, 0.1), rgba(189, 52, 254, 0))',
               border: '1px solid rgba(189, 52, 254, 0.5)',
               boxShadow: '0 0 8px rgba(189, 52, 254, 0.3)'
             }}>
          {/* Vite Logo with glow */}
          <div className="relative mr-2">
            <svg className="w-4 h-4 text-white" viewBox="0 0 256 257" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 002.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62z" fill="url(#paint0_linear)" />
              <path d="M185.432.063L96.44 17.501a3.268 3.268 0 00-2.634 3.014l-5.474 92.456a3.268 3.268 0 003.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113z" fill="url(#paint1_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="127.844" y1="0.064" x2="127.844" y2="257.338" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#41D1FF" />
                  <stop offset="1" stopColor="#BD34FE" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="127.844" y1="0.064" x2="127.844" y2="257.338" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFEA83" />
                  <stop offset="0.083" stopColor="#FFDD35" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 bg-purple-400 blur-sm opacity-50 rounded-full"></div>
          </div>
          
          <span className="text-white text-sm font-medium tracking-tight relative">Vite Config 2025</span>
        </div>
        
        {/* Main Heading - With 65px font size and slightly increased line spacing */}
        <h1 className="font-['Manrope'] font-semibold tracking-[-0.88px] px-5 mb-2 w-full cursor-default">
          <div 
            className="text-[65px] leading-[105%]"
            style={{ 
              background: 'linear-gradient(180deg, #fff 60%, #ffffff4f)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textWrap: 'balance'
            }}
          >The Build Tool</div>
          <div className="text-gray-400 text-[65px] leading-[105%]"
               style={{ textWrap: 'balance' }}>for the Web</div>
        </h1>
        
        {/* Description - Same size but with reduced bottom margin */}
        <p className="font-['Inter'] text-[#a9a9a9] text-[20px] leading-[150%] tracking-[-0.4px] w-full max-w-[800px] px-5 mb-6 font-normal cursor-default"
           style={{ textWrap: 'balance' }}>
          Vite is a blazing fast frontend build tool powering the next generation of web applications.
        </p>
        
        {/* Buttons - Same size */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Get Started Button */}
          <button 
            className="relative flex items-center justify-center px-4 py-2.5 w-fit rounded-lg text-white font-['Inter'] text-base font-medium leading-6 cursor-pointer transform transition-all duration-200 hover:-translate-y-1 hover:opacity-90 shadow-[0_1px_0_rgba(255,255,255,0.75)_inset]"
            style={{
              textShadow: '0 0 2px rgba(0, 0, 0, 0.2)',
              backgroundImage: 'radial-gradient(141.42% 141.42% at 100% 0%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0)), radial-gradient(140.35% 140.35% at 100% 94.74%, #bd34fe, rgba(189, 52, 254, 0)), radial-gradient(89.94% 89.94% at 18.42% 15.79%, #41d1ff, rgba(65, 209, 255, 0))'
            }}
          >
            Get started
          </button>
          
          {/* GitHub Button */}
          <a 
            className="flex items-center justify-center gap-2 px-4 py-2.5 w-fit rounded-lg text-white font-['Inter'] text-base font-medium leading-6 cursor-pointer transform transition-all duration-200 hover:-translate-y-1 bg-[#1A1A1A] hover:bg-[#252525] border border-[#333]"
            style={{
              textShadow: '0 0 2px rgba(0, 0, 0, 0.2)'
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Hero;