import React, { useState, useEffect, ReactNode } from "react";

interface ColorChangingTextOrBgProps {
  children: ReactNode;
  type?: "bg" | "text";
  className?: string; // Accept additional classes
}

const ColorChangingTextOrBg: React.FC<ColorChangingTextOrBgProps> = ({
  children,
  type = "bg",
  className = "",
}) => {
  const colors = [
    "green-600",
    "gray-800",
    "blue-500",
    "slate-800",
    "purple-500",
  ];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 5000); // change color every 10 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // Build the dynamic Tailwind class
  const colorClass =
    type === "bg" ? `bg-${colors[colorIndex]}` : `text-${colors[colorIndex]}`;

  return (
    <div
      className={`${colorClass} ${className} transition-colors duration-1000`}
    >
      {children}
    </div>
  );
};

export default ColorChangingTextOrBg;
