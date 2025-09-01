import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
      <defs>
        {/* Gradient for the horizontal line to fade at the edges */}
        <linearGradient id="lineFade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D6B370" stopOpacity="0" />
          <stop offset="15%" stopColor="#D6B370" stopOpacity="0.8" />
          <stop offset="85%" stopColor="#D6B370" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D6B370" stopOpacity="0" />
        </linearGradient>

        {/* Gradient for the crescent to give it depth and a subtle glow */}
        <radialGradient id="crescentGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#F5EDE1" stopOpacity="0.7"/>
          <stop offset="80%" stopColor="#D6B370" stopOpacity="1"/>
          <stop offset="100%" stopColor="#D6B370" stopOpacity="1"/>
        </radialGradient>
        
        {/* Filter for the star's soft glow effect */}
        <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Thin horizontal line, rendered at the back */}
      <rect x="0" y="49.5" width="100" height="1" fill="url(#lineFade)" />

      {/* Crescent/Petal shape, resembling two leaves cupping the star */}
      <path
        d="M 50,85 C 45,70 30,65 30,55 C 30,65 40,75 50,85 C 60,75 70,65 70,55 C 70,65 55,70 50,85 Z"
        fill="url(#crescentGlow)"
      />

      {/* The four-pointed star, on top with animation and glow effect */}
      <g className="animate-glow" filter="url(#glowFilter)">
        <path
          d="M50,25 L56,44 L75,50 L56,56 L50,75 L44,56 L25,50 L44,44 Z"
          className="fill-brand-primary dark:fill-brand-text transition-colors duration-300"
        />
      </g>
    </svg>
  );
};

export default AnimatedLogo;