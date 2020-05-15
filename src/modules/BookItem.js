import React from "react";
import {Link} from "react-router-dom";
import BasketCounter from "./BasketCounter";

// Images
import {ReactComponent as Basket} from "../static/basket-gray.svg";

// Redux
import {useDispatch} from "react-redux";
import {addToBasket} from "../redux-actions/";

export default function BookItem({
  setClass = "book_item",
  author,
  image,
  title,
  price,
  id,
  realcount
}) {
  const dispatch = useDispatch();
  return (
    <div className={setClass}>
      <div className="author">{author}</div>
      <div className="image">
        <Link to={`/catalog/${id}`}>
          <img src={image} alt="" />
        </Link>
      </div>
      <Link to={`/catalog/${id}`} className="link">
        <div className="title">{title}</div>
      </Link>
      <div className="bottom">
        <button
          className={`cat_basket_icon ${realcount > 0 ? "activ" : ""}`}
          onClick={() => dispatch(addToBasket(id))}
        >
          <Basket />
          <div className="counter_wripper">
            <BasketCounter count={realcount} />
          </div>
        </button>
        <div className="price">{price} ₽</div>
      </div>
    </div>
  );
}
