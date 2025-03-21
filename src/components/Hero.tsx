import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen gap-8 px-6 md:px-12 lg:px-24 transition-all duration-300 ease-in-out">
      
      {/* Left Section: Image and Title */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <img
          src="images/cpphero.png"
          alt="C++ Hero"
          className="h-40 md:h-52 lg:h-64"
        />
      </div>
      
      {/* Right Section: Description */}
      <div className="max-w-xl text-center md:text-left">
      <h1 className="text-5xl md:text-5xl font-extrabold text-primary mb-6 text-indigo-600">C-plus-plus</h1>
        <p className="text-lg md:text-xl font-normal text-secondary">
          Welcome to the ultimate C++ learning platform! Dive into the world of C++ with comprehensive tutorials, coding challenges, and hands-on projects. 
          Whether you're a beginner or an advanced programmer, our resources are tailored to enhance your coding skills. 
          Master object-oriented programming, data structures, algorithms, and much more. Join a community of passionate developers and take your coding journey to the next level!
        </p>
      </div>

    </div>
  );
}

export default Hero;