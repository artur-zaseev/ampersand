import React from "react";
import BookItem from "./BookItem";

export default function Slide({
  setWidth = 1,
  isTranslate,
  author,
  image,
  title,
  price,
  id,
  realcount
}) {
  const divStyles = {
    width: `calc(100% / ${setWidth})`
  };

  return (
    <div className="slide" style={divStyles}>
      <div className={`inner ${isTranslate ? "three" : ""}`}>
        <BookItem
          author={author}
          image={image}
          title={title}
          price={price}
          id={id}
          realcount={realcount}
        />
      </div>
    </div>
  );
}
