import React, { useState, useEffect } from 'react'

function Testimonials() {
  return (
    <div className="bg-black text-white p-8">
      <div className="mb-8 flex flex-col items-center">
        
        {/* Main Heading with Very Subtle Gradient */}
        <h2 className="font-manrope text-4xl font-semibold tracking-tight leading-tight mt-12 mb-0 text-center relative w-auto mx-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">Loved</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400"> by</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300"> the</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400"> community</span>
        </h2>

        {/* Subheading - Two Lines */}
        <h3 className="text-lg text-gray-300 mt-2 text-center leading-tight">
          Don't take our word for it -<br />
          listen to what Vite community members have to say.
        </h3>
      </div>

      {/* Improved Bento Grid Layout with Better Content Balance */}
      <div className="max-w-6xl mx-auto mt-12">
        {/* Main grid container */}
        <div className="grid grid-cols-4 gap-3 mx-6"> {/* Reduced gap and added horizontal margin */}
          {/* Row 1: 2-1-1 */}
          <div className="col-span-2">
            <TestimonialBox 
              name="Alex Johnson"
              role="Frontend Lead"
              date="March 15, 2025"
              review="Cut our build times by 40%. Instant HMR makes development feel magical."
              color="purple"
            />
          </div>
          <div className="col-span-1">
            <TestimonialBox 
              name="Sarah Williams"
              role="Indie Developer"
              date="Feb 22, 2025"
              review="Lightning fast refreshes!"
              color="blue"
            />
          </div>
          <div className="col-span-1 row-span-2">
            <TestimonialBox 
              name="Michael Chen"
              role="CTO"
              date="Jan 8, 2025"
              review="After conducting an in-depth benchmarking of various build tools, Vite emerged as the clear winner, securing a decisive victory by a landslide. The results were truly impressive, as efficiency far outshone the alternatives. As a result, our team onboarding time experienced a dramatic reduction, with new developers getting up to speed much faster."
              color="purple"
              tall={true}
            />
          </div>

          {/* Row 2: 1-1-1-^ (^ connects to above) - MODIFIED LAYOUT */}
          <div className="col-span-1">
            <TestimonialBox 
              name="Emma Rodriguez"
              role="Tech Lead"
              date="April 3, 2025"
              review="Outstanding community support. Issues resolved instantly."
              color="blue"
            />
          </div>
          <div className="col-span-1">
            <TestimonialBox 
              name="Lucas Wright"
              role="Senior Dev"
              date="Feb 5, 2025"
              review="Plugin ecosystem is unmatched."
              color="purple"
            />
          </div>
          <div className="col-span-1">
            <TestimonialBox 
              name="David Kim"
              role="Full Stack"
              date="March 27, 2025"
              review="Migrated from webpack in two weeks. Worth it."
              color="blue"
            />
          </div>
          
          {/* Row 3: 2-2 */}
          <div className="col-span-2">
            <TestimonialBox 
              name="Olivia Garcia"
              role="Freelancer"
              date="Feb 14, 2025"
              review="Zero-config setup saves me hours every week on multiple projects."
              color="purple"
            />
          </div>
          <div className="col-span-2">
            <TestimonialBox 
              name="Jackson Lee"
              role="Team Lead"
              date="Mar 18, 2025"
              review="Clear documentation made our transition smooth and painless."
              color="blue"
            />
          </div>
          
          {/* Row 4: 1-1-2 */}
          <div className="col-span-1">
            <TestimonialBox 
              name="James Wilson"
              role="UX Designer"
              date="Jan 30, 2025"
              review="Best DX in a decade."
              color="purple"
            />
          </div>
          <div className="col-span-1">
            <TestimonialBox 
              name="Sophia Martinez"
              role="Open Source"
              date="April 10, 2025"
              review="Elegant API that never gets in your way."
              color="blue"
            />
          </div>
          <div className="col-span-2">
            <TestimonialBox 
              name="Daniel Thompson"
              role="Engineering Manager"
              date="March 5, 2025"
              review="New devs are productive with Vite on day one. No extensive training needed."
              color="purple"
            />
          </div>
          
          {/* Row 5: 1-2-1 - MODIFIED LAYOUT */}
          <div className="col-span-1">
            <TestimonialBox 
              name="Isabella Brown"
              role="DevOps Engineer"
              date="Feb 8, 2025"
              review="65% faster CI pipeline times."
              color="blue"
            />
          </div>
          <div className="col-span-2">
            <TestimonialBox 
              name="Aiden Parker"
              role="Cloud Architect"
              date="Jan 12, 2025"
              review="Seamless integration with our testing suite and deployment platforms."
              color="purple"
            />
          </div>
          <div className="col-span-1 row-span-2">
            <TestimonialBox 
              name="Noah Taylor"
              role="Performance Engineer"
              date="Mar 22, 2025"
              review="75% reduction in build times. For our team, that's thousands of developer hours saved annually."
              color="blue"
              tall={true}
            />
          </div>
          
          {/* Row 6: 1-2-^ (^ connects to above) */}
          <div className="col-span-1">
            <TestimonialBox 
              name="Ava White"
              role="Junior Dev"
              date="Jan 17, 2025"
              review="Just works. No config headaches."
              color="purple"
            />
          </div>
          <div className="col-span-2">
            <TestimonialBox 
              name="Ethan Brown"
              role="Architect"
              date="Mar 11, 2025"
              review="Clean module system and TypeScript integration saved us from countless runtime errors."
              color="blue"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function TestimonialBox({ name, role, date, review, color, wide, tall, large }) {
  const [hasBeenHovered, setHasBeenHovered] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [glowSize, setGlowSize] = useState(Math.random() * 30 + 50); // Random size between 50-80
  
  // Generate subtle movements for the glow when in hover state
  useEffect(() => {
    if (hasBeenHovered) {
      const intervalId = setInterval(() => {
        // Create subtle random movement
        setGlowPosition({
          x: Math.random() * 100,
          y: Math.random() * 100
        });
        
        // Slightly vary the glow size
        setGlowSize(Math.random() * 30 + 50); // Random size between 50-80
      }, 3000); // Update every 3 seconds
      
      return () => clearInterval(intervalId);
    }
  }, [hasBeenHovered]);
  
  // Intensified gradient glows based on the testimonial color
  const purpleGlowGradient = 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.2) 30%, rgba(107, 33, 168, 0.15) 60%, rgba(88, 28, 135, 0.1) 80%, transparent 100%)';
  const blueGlowGradient = 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(96, 165, 250, 0.2) 30%, rgba(37, 99, 235, 0.15) 60%, rgba(30, 64, 175, 0.1) 80%, transparent 100%)';
  
  const glowGradient = color === 'purple' ? purpleGlowGradient : blueGlowGradient;
  
  // Subtle border gradients
  const purpleBorderGradient = 'linear-gradient(145deg, rgba(168, 85, 247, 0.05) 0%, rgba(139, 92, 246, 0.1) 25%, rgba(107, 33, 168, 0.15) 50%, rgba(139, 92, 246, 0.1) 75%, rgba(168, 85, 247, 0.05) 100%)';
  const blueBorderGradient = 'linear-gradient(145deg, rgba(59, 130, 246, 0.05) 0%, rgba(96, 165, 250, 0.1) 25%, rgba(37, 99, 235, 0.15) 50%, rgba(96, 165, 250, 0.1) 75%, rgba(59, 130, 246, 0.05) 100%)';
  
  const defaultBorderStyle = {
    borderRadius: '12px',
    backgroundClip: 'padding-box',
    position: 'relative'
  };
  
  const activeBorderStyle = {
    ...defaultBorderStyle,
    border: '1px solid transparent'
  };
  
  // Border style based on hover state
  const borderStyle = hasBeenHovered ? activeBorderStyle : defaultBorderStyle;
  
  return (
    <div 
      className={`bg-[#121212] p-6 transition-all duration-700 h-full relative overflow-hidden`}
      style={{ 
        ...borderStyle,
        transform: hasBeenHovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: hasBeenHovered 
          ? `0 0 20px 5px rgba(0, 0, 0, 0.3)` 
          : 'none',
        background: hasBeenHovered 
          ? 'linear-gradient(145deg, rgba(25, 25, 25, 0.9), rgba(18, 18, 18, 1))' 
          : '#121212'
      }}
      onMouseEnter={() => {
        setHasBeenHovered(true);
      }}
    >
      {/* Soft border glow effect - only visible when hovered */}
      {hasBeenHovered && (
        <div 
          className="absolute inset-0 rounded-xl z-0"
          style={{
            background: color === 'purple' ? purpleBorderGradient : blueBorderGradient,
            margin: '-1px',
            borderRadius: '13px',
            opacity: 0.6,
            filter: 'blur(1px)'
          }}
        />
      )}
      
      {/* Intensified background glow effect with gradients - only visible when hovered */}
      {hasBeenHovered && (
        <div 
          className="absolute transition-all duration-1000 rounded-full blur-3xl"
          style={{
            background: glowGradient,
            width: `${glowSize}%`,
            height: `${glowSize}%`,
            left: `${glowPosition.x - glowSize/2}%`,
            top: `${glowPosition.y - glowSize/2}%`,
            opacity: 0.8,
            pointerEvents: 'none' // Ensures the glow doesn't interfere with mouse events
          }}
        />
      )}
      
      <div className={`flex flex-col h-full ${tall || large ? 'justify-between' : ''} relative z-10`}>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-medium text-white">{name}</h4>
            <p className="text-xs text-gray-400">{role}</p>
          </div>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
        
        {/* Animated line with intensified glow */}
        <div className="relative h-1 rounded-full w-full my-3 bg-gray-700 overflow-hidden">
          <div 
            className={`absolute top-0 h-1 rounded-full ${color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'} transition-all duration-700`} 
            style={{ 
                width: hasBeenHovered ? '100%' : '30%',  // Expands on hover
                left: hasBeenHovered ? '0%' : '-30%',
                opacity: hasBeenHovered ? 1 : 0.7,  // Make the line more visible on hover
                boxShadow: hasBeenHovered ? 
                `0 0 30px 15px ${color === 'purple' ? '#d8b4fe' : '#93c5fd'}, 
                0 0 50px 20px ${color === 'purple' ? '#a855f7' : '#3b82f6'},
                0 0 80px 25px ${color === 'purple' ? '#7e22ce' : '#1d4ed8'},
                0 0 100px 35px ${color === 'purple' ? '#9b59b6' : '#60a5fa'},
                0 0 150px 50px ${color === 'purple' ? '#8b4f94' : '#1d4ed8'}` : 'none',
                transition: 'all 1s ease-in-out !important' // Added !important here
            }}
          />
        </div>
        
        <p className={`text-gray-300 text-sm flex-grow`}>{review}</p>
      </div>
    </div>
  );
}

export default Testimonials