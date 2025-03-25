'"use client"';
import { Tutcards } from '@/components/Tutcards';
import Tuthero from '@/components/Tuthero'
import React from 'react'

function page() {
  return (
    <main>
      <Tuthero />
      <Tutcards/>
      <footer className="mt-auto py-4 bg-transparent text-gray-600 text-normal text-center">
        &copy; {new Date().getFullYear()} C++ Tutorials. All rights reserved.
      </footer>
    </main>
  )
}

export default page