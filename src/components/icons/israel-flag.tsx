import React from "react";

export function IsraelFlagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 100" // Adjusted viewBox for simplicity
      {...props} // Pass down className, etc.
    >
      <rect width="160" height="100" fill="#fff" />
      <rect width="160" height="15" y="10" fill="#0038b8" />
      <rect width="160" height="15" y="75" fill="#0038b8" />
      {/* Star of David */}
      <g fill="none" stroke="#0038b8" strokeWidth="4">
        <path d="M80 32.5 L97.32 62.5 H62.68 Z" />
        <path d="M80 67.5 L97.32 37.5 H62.68 Z" />
      </g>
    </svg>
  );
} 