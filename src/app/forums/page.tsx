import Forumscontent from '@/components/Forumscontent'
import React from 'react'

function page() {
  return (
    <main>
      <Forumscontent/>
      <footer className="mt-auto py-4 bg-transparent text-gray-600 text-normal text-center">
        &copy; {new Date().getFullYear()} C++ Tutorials. All rights reserved.
      </footer>
    </main>
  )
}

export default page