import { HoverEffect } from "./ui/card-hover-effect";

export function Tutcards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-center text-4xl font-bold mb-8">Supplemental Papers</h1>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "ASCII Codes",
    description:
      "Learn about ASCII codes and how they are used in C++ to represent characters and symbols.",
    link: "#",
  },
  {
    title: "Numerical Bases",
    description:
      "Understand numerical bases and how to work with different number systems in C++.",
    link: "#1",
  },
  {
    title: "Boolean Operations",
    description:
      "Explore boolean operations and how to use logical operators in C++ for decision making.",
    link: "#2",
  },
];
