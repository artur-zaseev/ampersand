import React from "react";

export default function LeftArrow({goToPrevSlide}) {
  return <div className="backArrow arrow" onClick={goToPrevSlide}></div>;
}
