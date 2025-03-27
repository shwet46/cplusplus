import React from 'react';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2 px-6 md:px-12 lg:px-24 transition-all duration-300 ease-in-out text-center">
      
      <div className="h-[10rem] md:h-[20rem] flex items-center justify-center">
        <TextHoverEffect text="C++" />
      </div>
      
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-indigo-600">C-plus-plus</h1>
        <p className="text-base md:text-lg font-normal text-secondary">
        Learn C++ from the ground up—covering fundamentals, advanced concepts, and best practices for efficient coding.  
        Master data structures, algorithms, and real-world applications with hands-on examples.
        </p>
      </div>

    </div>
  );
}

export default Hero;