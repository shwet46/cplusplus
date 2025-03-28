"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  onClick,
  className,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  const isActive = active === item;

  return (
    <div onMouseEnter={() => setActive(item)} className="relative" onClick={onClick}>
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          `cursor-pointer px-4 py-2 rounded-2xl`,
          isActive ? "bg-cyan-600/50 rounded-2xl" : "hover:opacity-[0.9]",
          className
        )}
      >
        {item}
      </motion.p>
      {active !== null && isActive && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-white backdrop-blur-sm rounded-md overflow-hidden border border-black/[0.2] shadow-xl"
            >
              <motion.div layout className="w-max h-full p-4">
                {children}
              </motion.div>
            </motion.div>
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
        "relative rounded-md border border-transparent shadow-input flex justify-center space-x-4 px-8 py-2",
        className
      )}
    >
      {children}
    </nav>
  );
};

interface MobileMenuProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  active: string | null;
}

export function MobileMenu({ isOpen, children, className, onClose }: MobileMenuProps) {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''} ${className}`}>
      <button onClick={onClose}></button>
      {children}
    </div>
  );
}

export const MobileMenuItem = ({
  item,
  active,
  setActive,
  onClick,
  className,
}: {
  item: string;
  active: string | null;
  setActive: (item: string) => void;
  onClick?: () => void;
  className?: string;
}) => {
  const isActive = active === item;

  return (
    <div
      className={cn(
        `px-4 py-3`,
        isActive ? "bg-cyan-600/50" : "hover:bg-gray-100",
        className
      )}
      onClick={() => {
        setActive(item);
        if (onClick) onClick();
      }}
    >
      <p>{item}</p>
    </div>
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
    <Link href={href} className="flex space-x-2">
      <Image src={src} width={140} height={70} alt={title} className="flex-shrink-0 shadow-2xl" />
      <div>
        <h4 className="text-2xl font-bold mb-1">{title}</h4>
        <p className="text-sm max-w-[10rem]">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, className, ...rest }: React.ComponentProps<typeof Link>) => {
  return (
    <Link {...rest} className={cn("hover:text-black", className)}>
      {children}
    </Link>
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
    <button
      onClick={onClick}
      className={cn("block md:hidden focus:outline-none", className)}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-6 flex flex-col gap-1">
        <span className={`block h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </div>
    </button>
  );
};