import React, {useState} from "react";
import {Swipeable} from "react-swipeable";
import Slide from "./Slide";

export default function Slider({slidesCount = 4, step = 2, basket}) {
  let [currentIndex, setCurrentIndex] = useState(0);
  let [translateValue, setTranslateValue] = useState(0);
  let [isTranslate, setTranslateStatus] = useState(false);
  let [isTheeD, setThreeDStatus] = useState(false);

  const setEvents = e => {
    if (isTranslate || isTheeD) return;
    setThreeDStatus(true);
    setTranslateStatus(true);

    if (e.deltaY > 0) goToNextSlide();
    if (e.deltaY < 0) goToPrevSlide();

    setTimeout(() => {
      setThreeDStatus(false);
    }, 700);
  };

  const touchEvent = direction => {
    if (isTranslate || isTheeD) return;

    setThreeDStatus(true);
    setTranslateStatus(true);

    if (direction === "LEFT") {
      goToNextSlide();
    }
    if (direction === "RIGHT") {
      goToPrevSlide();
    }

    setTimeout(() => {
      setThreeDStatus(false);
    }, 700);
  };

  const slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  const goToNextSlide = () => {
    if (currentIndex + step >= basket.length - slidesCount) {
      if (currentIndex + 1 > basket.length - slidesCount) {
        setCurrentIndex(0);
        setTranslateValue(0);
      } else {
        setCurrentIndex(basket.length - slidesCount);
        setTranslateValue(
          translateValue +
            -(slideWidth() * (basket.length - slidesCount - currentIndex))
        );
      }
    } else {
      setCurrentIndex((currentIndex += step));
      setTranslateValue(translateValue + -(slideWidth() * step));
    }
  };

  const goToPrevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(basket.length - slidesCount);
      setTranslateValue(-(slideWidth() * (basket.length - slidesCount)));
      return;
    } else {
      if (currentIndex - step <= 0) {
        setCurrentIndex((currentIndex = 0));
        setTranslateValue((translateValue = 0));
      } else {
        setCurrentIndex((currentIndex -= step));
        setTranslateValue(translateValue + slideWidth() * step);
      }
    }
  };

  return (
    <Swipeable
      preventDefaultTouchmoveEvent
      onSwipedLeft={() => touchEvent("LEFT")}
      onSwipedRight={() => touchEvent("RIGHT")}
    >
      <div
        className="slider"
        onWheel={e => setEvents(e)}
        onTransitionEnd={() => setTranslateStatus(false)}
      >
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: "transform ease-out 0.45s 0.5s"
          }}
        >
          {basket.map((book, i) => (
            <Slide
              key={i}
              setWidth={slidesCount}
              isTranslate={isTranslate}
              author={book.author}
              image={book.image_3d}
              title={book.title}
              price={book.price}
              id={book.id}
              realcount={book.count}
            />
          ))}
        </div>
      </div>
    </Swipeable>
  );
}
