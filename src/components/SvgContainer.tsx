// import React from "react";

interface prop {
  src: string;
  color?: string;
  width?: string | number;
  height?: string | number;
}
export default function SvgContainer({ src, color, width, height }: prop) {
  return (
    <img
      src={src}
      style={{ color: color }}
      alt="svg-icon"
      width={width}
      height={height}
    />
  );
}
