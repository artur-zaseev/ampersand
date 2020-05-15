import React, {useState, useEffect} from "react";
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

export default ({id}) => {
  const basket = useSelector(state => state.basketReducer);
  const dispatch = useDispatch();

  let [count, setCount] = useState({});

  useEffect(() => {
    let _count = basket.filter(book => book.id === id)[0].count;
    setCount(_count);
  }, [basket, id]);

  return (
    <div className="basketItemMobile">
      <div className="top">
        <div className="label">Название книги</div>
        <Link to={`/catalog/${id}`} className="basketItemMobile_link">
          {basket[id].title}
        </Link>
        <button
          className="basketItemMobile_remove"
          onClick={() => dispatch(removeFromBasket(id))}
        >
          <Remove />
        </button>
      </div>

      <div className="count">
        <div className="text">Кол-во, шт</div>
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

      <div className="price">
        <div className="text">Цена</div>
        <div className="value">
          {count > 0 ? basket[id].price * count : null}
          <span className="small">₽</span>
        </div>
      </div>
    </div>
  );
};
