import React, {useEffect, useState} from "react";
import MainView from "../modules/MainView";

import {useSelector} from "react-redux";

export default function Main() {
  let [slidesCount, setSlidesCount] = useState(4);
  const winWidth = useSelector(state => state.windowReducer);
  const basket = useSelector(state => state.basketReducer);

  const changeSlides = () => {
    winWidth > 1000 && setSlidesCount(4);
    winWidth <= 1000 && winWidth > 800 && setSlidesCount(3);
    winWidth <= 800 && winWidth > 650 && setSlidesCount(3);
    winWidth <= 650 && winWidth > 500 && setSlidesCount(2);
    winWidth <= 500 && winWidth > 450 && setSlidesCount(2);
    winWidth <= 450 && winWidth > 300 && setSlidesCount(1);
  };

  useEffect(() => {
    changeSlides();
  }, [winWidth]);

  return <MainView slidesCount={slidesCount} basket={basket} />;
}
