import React, {useState, useEffect} from "react";
import data from "./Data";
import {Link} from "react-router-dom";

// Images
import {ReactComponent as Minus} from "../static/icon_minus.svg";
import {ReactComponent as Plus} from "../static/icon_plus.svg";
import {ReactComponent as Remove} from "../static/icon_basket_remove.svg";

// Redux
import {useSelector, useDispatch} from "react-redux";

// Actions
import {
  addToBasket,
  reduceFromBasket,
  removeFromBasket
} from "../redux-actions";

export default function BasketItem({id}) {
  const basket = useSelector(state => state.basketReducer);
  const dispatch = useDispatch();

  let [isVisible, setIsVisible] = useState(true);
  let [count, setCount] = useState(true);

  const remove = id => {
    setIsVisible(false);
    setTimeout(() => {
      dispatch(removeFromBasket(id));
    }, 500);
  };

  useEffect(() => {
    let _count = basket.filter(book => book.id === id)[0].count;
    setCount(_count);
    setIsVisible(true);
  }, [basket, id]);

  return (
    <div className={`basketItem ${isVisible && "visible"}`}>
      <Link to={`/catalog/${id}`} className="basket_item_title">
        {data.books[id].title}
      </Link>
      <div className="basket_item_count">
        <button
          className="reduce"
          onClick={() => dispatch(reduceFromBasket(id))}
        >
          <Minus />
        </button>
        {count > 0 ? <div className="value">{count}</div> : ""}
        <button className="add" onClick={() => dispatch(addToBasket(id))}>
          <Plus />
        </button>
      </div>
      <div className="basket_item_price">
        {count > 0 ? data.books[id].price * count : null}
        <span className="small">₽</span>
      </div>
      <button className="basket_item_remove" onClick={() => remove(id)}>
        <Remove />
      </button>
    </div>
  );
}
