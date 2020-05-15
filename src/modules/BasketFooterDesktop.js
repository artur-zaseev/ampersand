import React from "react";
import {Link} from "react-router-dom";

// Images
import {ReactComponent as IconBooks} from "../static/icon_books.svg";
import {ReactComponent as IconDelivery} from "../static/icon_delivery.svg";
import {ReactComponent as IconCoffee} from "../static/icon_coffee.svg";
import {ReactComponent as IconHart} from "../static/icon_hart.svg";

export default ({basketLength}) => {
  return (
    <div className="basket_footer">
      <p>Вам может быть интересно </p>
      <div className="basket_footer_flex">
        <Link
          to="/catalog"
          className={`basket_catalog ${basketLength === 0 &&
            "basket_catalog_big"}`}
        >
          <div className="text">
            <h2>Каталог</h2>
            <p>Больше книг представлено в нашем в каталоге</p>
          </div>
          <div className="image">
            <IconBooks />
          </div>
        </Link>

        <Link
          to="/bestsellers"
          className={`basket_bestsellers ${basketLength === 0 &&
            "basket_bestsellers_big"}`}
        >
          <div className="text">
            <h2>Бестселлеры</h2>
            <p>Лучшие книги, полюбившиеся читателям</p>
          </div>
          <div className="image">
            <IconHart />
          </div>
        </Link>

        {basketLength > 0 && (
          <Link to="/delivery" className="basket_delivery">
            <div className="text">
              <h2>Доставка</h2>
            </div>
            <div className="image">
              <IconDelivery />
            </div>
          </Link>
        )}

        {basketLength > 0 && (
          <Link to="/faq" className="basket_faq">
            <div className="text">
              <h2>FAQ</h2>
            </div>
            <div className="image">
              <IconCoffee />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
