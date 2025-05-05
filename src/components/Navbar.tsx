"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Menu,
  MenuItem,
  HamburgerButton,
  MobileMenu,
  MobileMenuItem,
} from "./ui/navbar-menu";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Articles", path: "/articles" },
    { name: "Forums", path: "/forums" },
    { name: "Reference", path: "/reference" },
  ];

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 font-medium transition-all duration-300",
          isScrolled
            ? "bg-zinc-900/90 backdrop-blur-lg shadow-lg shadow-black/10"
            : "bg-zinc-900",
          className
        )}
      >
        <div className="relative flex items-center px-4 py-3 mx-auto max-w-full md:max-w-7xl">
          {/* Logo */}
          <div className="flex items-center mr-4">
            <Link href="/" className="flex items-center group">
              <div className="h-10 w-10 rounded-full mr-3 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-400 text-white font-bold text-md shadow-lg">
                C++
              </div>
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl hidden sm:inline font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
              >
                Cplusplus.com
              </motion.span>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden ml-auto flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg text-blue-400 hover:text-blue-300 transition-colors"
              aria-label="Search"
              onClick={() => console.log("Mobile search")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </motion.button>

            <Link
              href="/login"
              className="p-2 rounded-lg text-blue-400 hover:text-blue-300 transition-colors"
              aria-label="User Account"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>

            <HamburgerButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:w-full">
            <Menu setActive={setActive} className="flex-shrink-0 mr-4">
              {navItems.map((item) => (
                <Link href={item.path} key={item.name}>
                  <MenuItem
                    setActive={setActive}
                    active={active}
                    item={item.name}
                    className="hover:text-cyan-400 transition-colors"
                  />
                </Link>
              ))}
            </Menu>

            <div className="flex-grow mx-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search for STL, functions, tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-2 border font-normal rounded-xl focus:outline-none focus:ring-2 text-sm bg-zinc-800/80 border-zinc-700/50 text-gray-300 focus:ring-cyan-500/50 placeholder-gray-500"
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </motion.button>
              </form>
            </div>

            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-shrink-0 px-5 py-2 rounded-xl transition-all bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-md"
              >
                Sign In
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onClose={closeMobileMenu}
              setActive={setActive}
              active={active}
            >
              <div className="px-4 py-4 border-b border-zinc-800">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-5 py-3 border rounded-xl bg-zinc-800/80 border-zinc-700/50 text-white text-sm focus:ring-cyan-500/50 focus:outline-none"
                  />
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </motion.button>
                </form>
              </div>

              {navItems.map((item) => (
                <Link href={item.path} key={item.name}>
                  <MobileMenuItem
                    item={item.name}
                    active={active}
                    setActive={setActive}
                    onClick={closeMobileMenu}
                    className="text-white hover:text-cyan-400"
                  />
                </Link>
              ))}

              <div className="p-4">
                <Link href="/login">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3 px-5 text-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-md"
                  >
                    Sign In
                  </motion.button>
                </Link>
              </div>
            </MobileMenu>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="h-16"></div>
    </>
  );
}

export default Navbar;