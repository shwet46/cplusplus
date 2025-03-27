"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component

const IOlib = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div className="bg-transparent my-16 min-h-screen flex items-center justify-center p-4">
        <div className="bg-zinc-900 rounded-xl shadow-2xl p-6 w-full max-w-5xl">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-zinc-100 mb-4 text-center">
              C++ Input/Output Stream Library
            </h1>
            <p className="text-zinc-300 text-center max-w-2xl mx-auto">
              Provides functionality to use an abstraction called <span className="text-cyan-400 font-semibold">streams</span> specially designed to perform input and output operations on sequences of characters, like files or strings. This functionality is provided through several related classes, as shown in the following relationship map, with the corresponding header file names on top.
            </p>
          </div>

          <div
            className={`
              cursor-pointer 
              transition-transform 
              duration-300 
              ease-in-out 
              ${isZoomed ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8' : ''}
            `}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <Image
              src="/images/io.png" // Replace with the correct image path
              alt="C++ Input/Output Stream Library Diagram"
              width={800} // Set the width of the image
              height={600} // Set the height of the image
              className={`
                object-contain 
                rounded-lg 
                shadow-lg 
                transition-all 
                duration-300 
                ${isZoomed ? 'max-w-[90%] max-h-[90%]' : 'hover:scale-105'}
              `}
            />
          </div>

          {isZoomed && (
            <div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-pointer"
              onClick={() => setIsZoomed(false)}
            >
              <div className="text-white text-center mt-4">
                Click anywhere to close
              </div>
            </div>
          )}
        </div>
      </div>
      <footer className="mt-auto py-4 bg-transparent text-gray-600 text-normal text-center">
        &copy; {new Date().getFullYear()} C++ Tutorials. All rights reserved.
      </footer>
    </>
  );
};

export default IOlib;