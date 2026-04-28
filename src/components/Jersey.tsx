import React from "react";

interface JerseyProps {
  number: number;
  className?: string;
  isGoalkeeper?: boolean;
}

export const Jersey: React.FC<JerseyProps> = ({ number, className = "", isGoalkeeper = false }) => {
  // Morocco Home (Red) or Goalkeeper (Usually Blue or Green)
  const primaryColor = isGoalkeeper ? "#0ea5e9" : "#c1272d"; // Sky blue for GK, Morocco Red for outfield
  const secondaryColor = isGoalkeeper ? "#0284c7" : "#006233"; // Morocco Green for outfield
  const textColor = "#ffffff";

  return (
    <div className={`relative flex items-center justify-center drop-shadow-md ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm transition-transform hover:scale-105"
      >
        {/* Main Body */}
        <path
          d="M 28 15 C 38 5 62 5 72 15 L 95 30 L 85 45 L 75 35 L 75 95 C 75 98 73 100 70 100 L 30 100 C 27 100 25 98 25 95 L 25 35 L 15 45 L 5 30 L 28 15 Z"
          fill={primaryColor}
        />
        
        {/* Under-arm shadows to give 3D depth */}
        <path
          d="M 25 35 L 25 100 L 32 100 L 32 45 Z"
          fill="#000000"
          fillOpacity="0.15"
        />
        <path
          d="M 75 35 L 75 100 L 68 100 L 68 45 Z"
          fill="#000000"
          fillOpacity="0.15"
        />

        {/* Chest Green Block (Distinctive 2022 Puma Style) */}
        {!isGoalkeeper && (
          <path
            d="M 28 35 L 72 35 L 72 65 L 28 65 Z"
            fill={secondaryColor}
          />
        )}
        
        {/* Collar Trim */}
        <path
          d="M 40 10 C 45 15 55 15 60 10 C 58 18 42 18 40 10 Z"
          fill={secondaryColor}
        />
        <path
          d="M 39 10 C 40 12 43 14 45 15 L 39 12 Z"
          fill={secondaryColor}
        />

        {/* Sleeve Trims */}
        <path d="M 5 30 L 8 28 L 15 40 L 12 43 Z" fill={secondaryColor} />
        <path d="M 95 30 L 92 28 L 85 40 L 88 43 Z" fill={secondaryColor} />

        {/* Generic Star/Logo on Left Chest */}
        <circle cx="65" cy="22" r="3" fill="#006233" />
        {/* Generic Manufacturer Logo on Right Chest */}
        <path d="M 33 22 L 37 20 L 35 24 Z" fill="#ffffff" />
        
        {/* The Number */}
        <text
          x="50"
          y="52"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="30"
          fill={textColor}
          textAnchor="middle"
          dominantBaseline="middle"
          letterSpacing="-1"
          className="drop-shadow-sm"
        >
          {number}
        </text>
      </svg>
    </div>
  );
};
