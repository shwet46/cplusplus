"use client";
import React from 'react';

interface HomeCardsProps {
  darkMode: boolean;
}

const HomeCards: React.FC<HomeCardsProps> = ({ darkMode }) => {
  const cardStyle = darkMode
    ? 'bg-[#1e1e1e] border-gray-700 text-gray-200 hover:bg-[#2a2a2a]'
    : 'bg-[#f5f5f5] border-gray-300 text-gray-900 hover:bg-[#eaeaea]';

  const codeBlockStyle = darkMode
    ? 'bg-[#0d1117] text-[#7ee787] border-gray-700'
    : 'bg-[#f0f0f0] text-[#2d7d46] border-gray-400';

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 mb-10 lg:px-8">
      <div className="flex flex-col md:flex-row gap-10 mt-10 w-full max-w-5xl">
        {["Tutorials", "Reference", "Articles"].map((title, index) => (
          <div
            key={index}
            className={`w-full md:w-2/3 lg:w-1/2 text-left rounded-md p-4 border shadow-md ${cardStyle} sticky top-0 transform transition duration-300 hover:scale-105 hover:animate-[wiggle_0.3s_ease-in-out]`}
          >
            <h1 className="text-xl sm:text-2xl font-bold text-blue-500">{title}</h1>
            <p className={`text-sm sm:text-lg mt-4 p-2 rounded ${codeBlockStyle}`}>
              {title === "Tutorials"
                ? "C++ Language: Learn this versatile and powerful programming language. Includes detailed explanations of pointers, functions, classes and templates..."
                : title === "Reference"
                ? "Description of the most important classes, functions, and objects of the Standard Language Library, with descriptive fully-functional short programs as examples."
                : "User-contributed articles, organized into different categories. You can contribute your own articles!"}
            </p>
            <button className="mt-4 px-6 py-2 text-xl font-bold bg-blue-500 text-white border-2 border-black shadow-md">
              Browse
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCards;