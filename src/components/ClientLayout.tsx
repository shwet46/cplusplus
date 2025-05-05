"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";
import Navbar from "./Navbar"; // Use Navbar directly

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideNavbar = pathname === "/login"; // Hide only on /login

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {!hideNavbar && <Navbar />}
      {children}
    </ThemeProvider>
  );
}