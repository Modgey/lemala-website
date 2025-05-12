import React from "react";

export function UsaFlagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 75 50"
      {...props} // Pass down className, etc.
    >
      {/* Simplified representation */}
      <defs>
        <clipPath id="a">
          <path d="M0 0h75v50H0z"/>
        </clipPath>
        <clipPath id="b">
          <path d="M0 0h30v25H0z"/>
        </clipPath>
        <g id="c">
          <g id="d">
            <path d="M0-1l.31.95H1L.38 0l.31.95H-.62L0 .59-.31-.35h-.62L-.38 0 .24-.59z" fill="#fff" transform="scale(1.25)"/>
            <path id="e" d="M0-1l.19.59h.62L.38 0l.19.59h-.62L0 .59-.19-.35h-.62L-.38 0 .24-.59z" fill="#fff" transform="scale(1.5625)"/>
          </g>
          <use xlinkHref="#d" transform="rotate(72)"/>
          <use xlinkHref="#d" transform="rotate(144)"/>
          <use xlinkHref="#d" transform="rotate(216)"/>
          <use xlinkHref="#d" transform="rotate(288)"/>
        </g>
      </defs>
      <path fill="#bd3d44" d="M0 0h75v50H0z"/>
      <path stroke="#fff" strokeWidth="5" d="M0 5h75m0 10H0m0 10h75m0 10H0m0 10h75" clipPath="url(#a)"/>
      <path fill="#192f5d" d="M0 0h30v25H0z"/>
      <g clipPath="url(#b)">
        <use xlinkHref="#c" transform="translate(5 2.5)"/>
        <use xlinkHref="#e" transform="translate(10 2.5)"/>
        <use xlinkHref="#c" transform="translate(15 2.5)"/>
        <use xlinkHref="#e" transform="translate(20 2.5)"/>
        <use xlinkHref="#c" transform="translate(25 2.5)"/>
        <use xlinkHref="#e" transform="translate(5 7.5)"/>
        <use xlinkHref="#c" transform="translate(10 7.5)"/>
        <use xlinkHref="#e" transform="translate(15 7.5)"/>
        <use xlinkHref="#c" transform="translate(20 7.5)"/>
        <use xlinkHref="#e" transform="translate(25 7.5)"/>
        <use xlinkHref="#c" transform="translate(5 12.5)"/>
        <use xlinkHref="#e" transform="translate(10 12.5)"/>
        <use xlinkHref="#c" transform="translate(15 12.5)"/>
        <use xlinkHref="#e" transform="translate(20 12.5)"/>
        <use xlinkHref="#c" transform="translate(25 12.5)"/>
        <use xlinkHref="#e" transform="translate(5 17.5)"/>
        <use xlinkHref="#c" transform="translate(10 17.5)"/>
        <use xlinkHref="#e" transform="translate(15 17.5)"/>
        <use xlinkHref="#c" transform="translate(20 17.5)"/>
        <use xlinkHref="#e" transform="translate(25 17.5)"/>
         <use xlinkHref="#c" transform="translate(5 22.5)"/>
        <use xlinkHref="#e" transform="translate(10 22.5)"/>
        <use xlinkHref="#c" transform="translate(15 22.5)"/>
        <use xlinkHref="#e" transform="translate(20 22.5)"/>
        <use xlinkHref="#c" transform="translate(25 22.5)"/>
      </g>
    </svg>
  );
} 