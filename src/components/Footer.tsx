"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaXTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="bg-zinc-950 text-gray-400 pt-10 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li><Link href="/reference" className="hover:text-blue-400 transition-colors">Reference</Link></li>
              <li><Link href="/tutorials" className="hover:text-blue-400 transition-colors">Tutorials</Link></li>
              <li><Link href="/articles" className="hover:text-blue-400 transition-colors">Articles</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="/forum" className="hover:text-blue-400 transition-colors">Forum</Link></li>
              <li><Link href="/snippets" className="hover:text-blue-400 transition-colors">Code Snippets</Link></li>
              <li><Link href="/contribute" className="hover:text-blue-400 transition-colors">Contribute</Link></li>
              <li><Link href="/events" className="hover:text-blue-400 transition-colors">Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/books" className="hover:text-blue-400 transition-colors">Books</Link></li>
              <li><Link href="/compilers" className="hover:text-blue-400 transition-colors">Compilers</Link></li>
              <li><Link href="/libraries" className="hover:text-blue-400 transition-colors">Libraries</Link></li>
              <li><Link href="/toolchains" className="hover:text-blue-400 transition-colors">Toolchains</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0 text-xl">
            <Link href="https://github.com/shwet46/cplusplus" aria-label="GitHub" className="hover:text-white transition-colors">
              <FaGithub />
            </Link>
            <Link href="https://x.com/shwet46" aria-label="X (Twitter)" className="hover:text-white transition-colors">
              <FaXTwitter />
            </Link>
            <Link href="https://youtube.com/@shwet-46?si=uAe6yFfiEydcyMpW" aria-label="YouTube" className="hover:text-white transition-colors">
              <FaYoutube />
            </Link>
            <Link href="https://www.linkedin.com/in/shweta-behera/" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <FaLinkedin />
            </Link>
          </div>

          <div className="text-gray-400 text-sm">
            <p>© {year} cplusplus.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;