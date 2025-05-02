import React from 'react';
import FeatureBox1 from './Features/FeatureBox1'; 
import FeatureBox2 from './Features/FeatureBox2';
import FeatureBox3 from './Features/FeatureBox3';
import FeatureBox4 from './Features/FeatureBox4';

function Features() {
  return (
    <div className="bg-black text-white p-8">
      <div className="mb-8 flex flex-col items-center">
        <h2 className="font-manrope text-4xl font-semibold tracking-tight leading-tight mt-12 mb-1 text-center relative w-auto mx-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white">Re</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">defining</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white"> dev</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white">eloper </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">experience</span>
        </h2>

        <h3 className="text-lg text-gray-300 mt-0 -mb-4">
          Vite makes web development simple again
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 place-items-center">
        <FeatureBox1 />
        <FeatureBox2 />
        <FeatureBox3 />
        <FeatureBox4 />
      </div>
    </div>
  );
}

export default Features;
