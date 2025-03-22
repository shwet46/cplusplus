"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuItem,
  HamburgerButton,
  MobileMenu,
  MobileMenuItem
} from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    
    checkMobile();
    
    window.addEventListener("resize", checkMobile);
    
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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
  
  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 font-bold z-50 shadow-sm transition-colors duration-200",
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900",
        className
      )}
    >
      <div className="relative flex items-center px-4 py-2 mx-auto max-w-full md:max-w-6xl">
        <div className="flex items-center mr-4">
          <div className="flex items-center">
            <div className="h-9 w-9 rounded-full mr-2 flex items-center justify-center text-white text-sm">
              <img src="images/cpp.png" alt="c++" />
            </div>
            <span className={cn("text-lg hidden sm:inline", darkMode ? "text-blue-300" : "text-indigo-800")}>
              Cplusplus.com
            </span>
          </div>
        </div>
        <div className="md:hidden ml-auto flex items-center">
          <button 
            onClick={toggleTheme} 
            className={cn("p-2 mr-2", darkMode ? "text-yellow-300" : "text-gray-600")}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          
          <Link 
            href="/login" 
            className={cn("p-2 mr-4", darkMode ? "text-pink-300" : "text-pink-600")}
            aria-label="User Account"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>
          
          <HamburgerButton 
            isOpen={isMobileMenuOpen} 
            onClick={toggleMobileMenu} 
          />
        </div>

        <div className="hidden md:flex md:items-center md:w-full">
          <Menu setActive={setActive} className="flex-shrink-0">
            <Link href={"/"}>
              <MenuItem setActive={setActive} active={active} item="Home" />
            </Link>
            <Link href={"/tutorials"}>
              <MenuItem setActive={setActive} active={active} item="Tutorials" />
            </Link>
            <Link href={"/articles"}>
              <MenuItem setActive={setActive} active={active} item="Articles" />
            </Link>
            <Link href={"/forums"}>
              <MenuItem setActive={setActive} active={active} item="Forums" />
            </Link>
            <Link href={"/reference"}>
              <MenuItem setActive={setActive} active={active} item="Reference" />
            </Link>
          </Menu>
          
          <div className="flex-grow mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Stl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "w-full px-4 py-2 border font-medium rounded-2xl focus:outline-none focus:ring-2 text-sm",
                  darkMode 
                    ? "bg-gray-800 border-gray-700 text-gray-400 focus:ring-cyan-400" 
                    : "bg-white border-gray-300 text-gray-700 focus:ring-cyan-500"
                )}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </form>
          </div>
          
          <button 
            onClick={toggleTheme} 
            className={cn("p-2 mr-4", darkMode ? "text-yellow-300" : "text-gray-600")}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          <Link 
            href="/login" 
            className={cn(
              "flex-shrink-0 px-4 py-2 rounded-2xl transition-colors duration-200",
              darkMode 
                ? "bg-blue-500 hover:bg-blue-600 text-white" 
                : "bg-blue-500 hover:bg-blue-600 text-white"
            )}
          >
            Login
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            onClose={closeMobileMenu}
            setActive={setActive}
            active={active}
            className={darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
          >
            <div className={cn("px-4 py-3 border-b", darkMode ? "border-gray-700" : "border-gray-200")}>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm",
                    darkMode 
                      ? "bg-gray-800 border-gray-700 text-white focus:ring-cyan-400" 
                      : "bg-white border-gray-300 text-gray-900 focus:ring-cyan-500"
                  )}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </form>
            </div>
            <Link href={"/"}>
              <MobileMenuItem 
                item="Home"
                active={active}
                setActive={setActive}
                onClick={closeMobileMenu}
                className={darkMode ? "text-white hover:bg-gray-700" : ""}
              />
            </Link>
            <Link href={"/tutorials"}>
              <MobileMenuItem 
                item="Tutorials"
                active={active}
                setActive={setActive}
                onClick={closeMobileMenu}
                className={darkMode ? "text-white hover:bg-gray-700" : ""}
              />
            </Link>
            <Link href={"/articles"}>
              <MobileMenuItem 
                item="Articles"
                active={active}
                setActive={setActive}
                onClick={closeMobileMenu}
                className={darkMode ? "text-white hover:bg-gray-700" : ""}
              />
            </Link>
            <Link href={"/forums"}>
              <MobileMenuItem 
                item="Forums"
                active={active}
                setActive={setActive}
                onClick={closeMobileMenu}
                className={darkMode ? "text-white hover:bg-gray-700" : ""}
              />
            </Link>
            <Link href={"/reference"}>
              <MobileMenuItem 
                item="Reference"
                active={active}
                setActive={setActive}
                onClick={closeMobileMenu}
                className={darkMode ? "text-white hover:bg-gray-700" : ""}
              />
            </Link>
          </MobileMenu>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;