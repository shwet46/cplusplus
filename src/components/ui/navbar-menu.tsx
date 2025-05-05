"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 13,
  stiffness: 120,
  restDelta: 0.0001,
  restSpeed: 0.0001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  onClick,
  className,
  icon,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}) => {
  const isActive = active === item;

  return (
    <div onMouseEnter={() => setActive(item)} className="relative" onClick={onClick}>
      <motion.div
        initial={{ opacity: 0.9 }}
        whileHover={{ 
          opacity: 1,
          scale: 1.05,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "cursor-pointer px-4 py-2 rounded-lg flex items-center gap-2 transition-all",
          isActive 
            ? "text-cyan-400 font-medium" 
            : "text-zinc-200",
          className
        )}
      >
        {icon && <span className="text-lg">{icon}</span>}
        <span>{item}</span>
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute bottom-0 left-1 right-1 h-0.5 bg-cyan-400"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </motion.div>
      {active !== null && isActive && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={transition}
          className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 backdrop-blur-xl rounded-xl overflow-hidden border border-zinc-700/50 shadow-2xl shadow-cyan-900/20">
            <div className="w-max h-full p-4">
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        "relative rounded-xl flex justify-center space-x-2",
        className
      )}
    >
      {children}
    </nav>
  );
};

export const MobileMenu = ({
  isOpen,
  children,
  className,
  onClose,
  setActive,
  active,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  active: string | null;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: 1, 
        height: "auto",
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      exit={{ 
        opacity: 0, 
        height: 0,
        transition: { duration: 0.2, ease: "easeInOut" }
      }}
      className={cn(
        "overflow-hidden mobile-menu w-full bg-zinc-900 border-b border-zinc-800 shadow-2xl shadow-black/30",
        className
      )}
    >
      <div className="max-h-[80vh] overflow-y-auto">
        {children}
      </div>
    </motion.div>
  );
};

export const MobileMenuItem = ({
  item,
  active,
  setActive,
  onClick,
  className,
  icon,
}: {
  item: string;
  active: string | null;
  setActive: (item: string) => void;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}) => {
  const isActive = active === item;

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-5 py-4 border-b border-zinc-800 flex items-center gap-3",
        isActive 
          ? "border-l-4 border-l-cyan-500 text-cyan-400" 
          : "",
        className
      )}
      onClick={() => {
        setActive(item);
        if (onClick) onClick();
      }}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span className={isActive ? "font-medium" : ""}>{item}</span>
    </motion.div>
  );
};

export const HamburgerButton = ({
  isOpen,
  onClick,
  className,
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={cn(
        "block md:hidden focus:outline-none p-2 rounded-lg hover:bg-zinc-800 transition-colors",
        className
      )}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-6 flex flex-col gap-1.5">
        <motion.span 
          animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="block h-0.5 w-full bg-current rounded-full"
        ></motion.span>
        <motion.span 
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="block h-0.5 w-full bg-current rounded-full"
        ></motion.span>
        <motion.span 
          animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="block h-0.5 w-full bg-current rounded-full"
        ></motion.span>
      </div>
    </motion.button>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-3 group">
      <div className="overflow-hidden rounded-lg">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={src} 
          width={140} 
          height={70} 
          alt={title} 
          className="flex-shrink-0 shadow-xl object-cover"
        />
      </div>
      <div>
        <h4 className="text-lg font-bold mb-1 group-hover:text-cyan-400 transition-colors">{title}</h4>
        <p className="text-sm max-w-[12rem] text-zinc-300">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, className, ...rest }: React.ComponentProps<typeof Link>) => {
  return (
    <Link 
      {...rest} 
      className={cn(
        "hover:text-cyan-400 transition-colors duration-200", 
        className
      )}
    >
      {children}
    </Link>
  );
};