"use client";
import React from 'react';
import concurrencyData from '../data/atomics.json';

const Atomics = () => {
  return (
    <>
    <div className="bg-zinc-900 my-18 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-100 mb-6">Atomics and threading library</h1>
        <p className="text-gray-300 mb-6">
          The C++ Standard Library provides powerful concurrency and synchronization primitives that enable safe and efficient multi-threaded programming. These headers offer essential tools for managing threads, synchronizing access to shared resources, and handling asynchronous operations:
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
            <tbody className="divide-y divide-gray-700">
              {concurrencyData.headers.map((library, index) => (
                <tr
                  key={index}
                  className="hover:bg-zinc-700 transition duration-200 ease-in-out"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                    <code className="bg-zinc-600 px-2 py-1 rounded text-blue-300">
                      {library.name}
                    </code>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    <code>{library.originalName.replace(/[<>]/g, '')}</code>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {library.description} (header)
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

export default Atomics;