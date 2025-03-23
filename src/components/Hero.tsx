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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi accusamus facilis voluptas repudiandae excepturi voluptatibus beatae repellendus saepe. Quam quisquam non culpa omnis molestiae, iusto placeat! Beatae quaerat quam harum.
        </p>
      </div>

    </div>
  );
}

export default Hero;