import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import anime from "animejs";

// Images
import {ReactComponent as Logo} from "../static/logo-and-text.svg";
import {ReactComponent as IconArrow} from "../static/icon_arrow.svg";

export default function CatalogItemContent({book, addItem}) {
  let [direction, setDirection] = useState(null);
  let [isArrowDown, setIsArrowDown] = useState(true);

  useEffect(() => {
    if (book.review.length < 1) return;
    direction === "Up" && animation("forward");
    direction === "Down" && animation("back");
  }, [direction]);

  const setView = e => {
    e.deltaY > 0 && setDirection("Up");
    e.deltaY < 0 && setDirection("Down");
  };

  const animation = type => {
    if (type === "forward") {
      anime
        .timeline({
          easing: "linear"
        })
        .add({
          targets: ".translate",
          translateY: "-35vh",
          duration: 300
        });
      setTimeout(() => {
        setIsArrowDown(false);
      }, 150);
    } else {
      anime
        .timeline({
          easing: "linear"
        })
        .add({
          targets: ".translate",
          translateY: "0vh",
          duration: 300
        });
      setTimeout(() => {
        setIsArrowDown(true);
      }, 150);
    }
  };

  return (
    <div className="cat_item">
      <div className="cat_item_title">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="cat_item_body" onWheel={e => setView(e)}>
        <div className="text">
          <div className="author">{book.author}</div>
          <div className="title">{book.title}</div>
          <div className="cat_item_info">
            <div className="translate">
              <div className="annotate">
                <div className="inner">
                  <span>Аннотация</span>
                  {book.annotate}
                </div>
              </div>
              <div className="review">
                <div className="inner">
                  <span>Отзыв</span>
                  {book.review}
                </div>
              </div>
            </div>
            {book.review.length > 0 && (
              <div className={`cat_item_arrow ${isArrowDown && "to_bottom"}`}>
                <IconArrow />
              </div>
            )}
          </div>

          <div className="price">{book.price} ₽</div>

          {book.count < 1 && (
            <button onClick={() => addItem(book.id)}>добавить в корзину</button>
          )}

          {book.count > 0 && (
            <Link to="/basket">
              <button>перейти в корзину</button>
            </Link>
          )}

          <div className="image">
            <img src={book.image_3d} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
