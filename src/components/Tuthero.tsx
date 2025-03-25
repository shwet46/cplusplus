import React from 'react';
import { Explorebutton } from './Explorebutton';

function Tuthero() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 px-6 md:px-12 lg:px-24 transition-all duration-300 ease-in-out text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-cyan-700">
        C++ Language Tutorials
      </h1>
      <p className='w-full sm:w-[500px] md:w-[700px] mt-6 sm:mt-8 md:mt-10 mx-auto text-base sm:text-lg md:text-xl'>
        Learn C++ from its basics or introduce yourself to new language features with The C++ Language Tutorial.
        A fast paced self-teaching tutorial covering the modern concepts of this programming language.
      </p>
      <Explorebutton />
    </div>
  );
}

export default Tuthero;