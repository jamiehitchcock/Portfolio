import React from "react";

// set props typing to children
type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-3xl font-medium mb-8 text-center text-decoration-line: underline decoration-4 decoration-violet-700">{children}</h2>;
}
