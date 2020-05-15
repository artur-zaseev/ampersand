import React from "react";

export default function RightArrow({goToNextSlide}) {
  return <div className="nextArrow arrow" onClick={goToNextSlide}></div>;
}
