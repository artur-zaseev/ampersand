import React from "react";
import "./Burger.css";

export const Burger = ({isActiv = false}) => {
  return (
    <svg
      className="burger"
      width="44px"
      height="30px"
      viewBox="0 0 44 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#ffffff">
        <rect
          className={`line1 ${isActiv ? "open1" : ""}`}
          x="0"
          y="1"
          rx="2"
          ry="2"
          width="44px"
          height="4px"
        />
        <rect
          className={`line2 ${isActiv ? "open2" : ""}`}
          x="0"
          y="13"
          rx="2"
          ry="2"
          width="44px"
          height="4px"
        />
        <rect
          className={`line3 ${isActiv ? "open3" : ""}`}
          x="0"
          y="25"
          rx="2"
          ry="2"
          width="44px"
          height="4px"
        />
      </g>
    </svg>
  );
};
