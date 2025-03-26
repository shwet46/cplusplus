import React from 'react';

const Articlecat = () => {
  const categories = [
    { name: 'Algorithms', description: 'Algorithms and formulas for specific purposes' },
    { name: 'C++ 11', description: 'The new C++ standard' },
    { name: 'Graphics and multimedia', description: 'Including DirectX, OpenGL, ...' },
    { name: 'How-To', description: 'Guided sets of instructions on a particular topic' },
    { name: 'Language Features', description: 'Specific C++ language features' },
    { name: 'Unix/Linux programming', description: 'For all UN*X platforms' },
    { name: 'Source Code', description: '' },
    { name: 'Standard Library', description: 'C++ standard library' },
    { name: 'Tips and Tricks', description: 'Programming tips' },
    { name: 'Tools and Libraries', description: 'Compilers, IDEs, debuggers, proprietary libraries...' },
    { name: 'Visual C++', description: 'Including MFC, ATL, C++/CLI, ...' },
    { name: 'Windows API', description: 'Programming Windows using its API' }
  ];

  return (
    <div className="bg-transparent mt-18 mb-10 min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-6 text-center">
        Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="bg-zinc-800 rounded-lg shadow-md p-4 transition-all duration-300 
                         hover:bg-slate-700 hover:scale-[1.02] 
                         transform hover:-translate-y-1 
                         border border-zinc-700"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 truncate">
                {category.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 line-clamp-2">
                {category.description || 'No description available'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articlecat;