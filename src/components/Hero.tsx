import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen gap-8 px-6 md:px-12 lg:px-24 transition-all duration-300 ease-in-out">
      
      {/* Left Section: Image and Title */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <Image
          src="/images/cpphero.png"
          alt="C++ Hero"
          width={350} // Adjust the width as needed
          height={256} // Adjust the height as needed
          className="h-40 md:h-52 lg:h-64"
        />
      </div>
      
      {/* Right Section: Description */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-5xl md:text-5xl font-extrabold text-primary mb-6 text-indigo-600">C-plus-plus</h1>
        <p className="text-lg md:text-xl font-normal text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi accusamus facilis voluptas repudiandae excepturi voluptatibus beatae repellendus saepe. Quam quisquam non culpa omnis molestiae, iusto placeat! Beatae quaerat quam harum.
        </p>
      </div>

    </div>
  );
}

export default Hero;