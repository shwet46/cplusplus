"use client";
import React from 'react';
import headersData from '../data/clang.json';

const Clang = () => {
  return (
    <>
    <div className="bg-transparent my-16 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-100 mb-6">C Library</h1>
        <p className="text-gray-300 mb-6">
          The elements of the C language library are also included as a subset of the C++ Standard library. These cover many aspects, from general utility functions and macros to input/output functions and dynamic memory management functions:
        </p>
        <div className="bg-zinc-800 shadow-lg rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-zinc-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Header
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Original Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-700">
              {headersData.headers.map((header, index) => (
                <tr 
                  key={index} 
                  className="hover:bg-zinc-700 transition duration-200 ease-in-out"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                    <code className="bg-zinc-600 px-2 py-1 rounded text-blue-300">
                      {header.name}
                    </code>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    <code>{header.originalName}</code>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {header.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <footer className="mt-auto py-4 bg-transparent text-gray-600 text-normal text-center">
          &copy; {new Date().getFullYear()} C++ Tutorials. All rights reserved.
    </footer>
    </>
  );
};

export default Clang;