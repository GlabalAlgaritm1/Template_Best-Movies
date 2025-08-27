import React from "react";

const Arrow = ({
  size = 24,
  className = "",
  fill = "#111111",
  strokeWidth = "2",
  direction = "left",
}) => {
  const directionStyle = {
    top: "rotate-90",
    bottom: "-rotate-90",
    right: "rotate-180",
    left: "rotate-0",
  };
  return (
    <svg
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`${directionStyle[direction]} ${className}`}
    >
      <path
        stroke={fill}
        d="M14 19L7 12L14 5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default Arrow;
