import React from 'react'


const WhiskMark = () => {
  return (
    <svg
      viewBox="0 0 120 120"
      width="90"
      height="90"
      className="whisk-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Scribble */}
      <path
        d="
          M30 65
          C15 40, 40 15, 65 30
          C90 45, 70 75, 45 65
          C20 55, 25 35, 55 40
        "
        fill="none"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="scribble"
      />

      {/* STAR (Top) */}
      <path
        d="M60 8 L62 14 L68 16 L62 18 L60 24 L58 18 L52 16 L58 14 Z"
        fill="black"
        className="whisk-icon icon-star"
      />

      {/* ZIG ZAG (Left) */}
      <path
        d="M14 60 L20 54 L16 54 L22 48"
        fill="none"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="whisk-icon icon-zig"
      />

      {/* TRIANGLE (Bottom) */}
      <path
        d="M60 92 L54 82 L66 82 Z"
        fill="black"
        className="whisk-icon icon-triangle"
      />
    </svg>
  );
};

export default WhiskMark;
