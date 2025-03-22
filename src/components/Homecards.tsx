"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Tutorials",
    description:
      "C++ Language: Learn this versatile and powerful programming language. Includes detailed explanations of pointers, functions, classes and templates, among others...",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/card1.png')" }}>
        Tutorials
      </div>
    ),
  },
  {
    title: "Reference",
    description:
      "Description of the most important classes, functions and objects of the Standard Language Library, with descriptive fully-functional short programs as examples.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/card2.png')" }}>
        Reference
      </div>
    ),
  },
  {
    title: "Articles",
    description:
      "User-contributed articles, organized into different categories. You can contribute your own articles!",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/card3.png')" }}>
        Articles
      </div>
    ),
  },
];

export function HomeCards() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}

export default HomeCards;