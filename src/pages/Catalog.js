import React, {useState} from "react";
import {Link} from "react-router-dom";
import BookItem from "../modules/BookItem";
import BookItemMobile from "../modules/BookItemMobile";

// Images
import {IconBestsellers} from "../static/modules/IconBestsellers/IconBestsellers";
import {IconFaqWoman} from "../static/modules/IconFaqWoman/IconFaqWoman";
import {ReactComponent as Logo} from "../static/logo.svg";

// Redux
import {useSelector} from "react-redux";

export default function Catalog() {
  let [bestStatus, setBestStatus] = useState(false);
  let [faqStatus, setFaqStatus] = useState(false);
  const winWidth = useSelector(state => state.windowReducer);
  const basket = useSelector(state => state.basketReducer);

  return (
    <div className="catalog">
      <div className="page_title">
        <h1>
          <Logo />
          <span>Каталог</span>
        </h1>
      </div>
      <div className="catalog_list">
        {basket.map(book => (
          <div className="item" key={book.id}>
            {winWidth > 415 && (
              <BookItem
                id={book.id}
                setClass={"book_item_resp"}
                author={book.author}
                image={book.image_3d}
                title={book.title}
                price={book.price}
                realcount={book.count}
              />
            )}
            {winWidth <= 415 && (
              <BookItemMobile
                id={book.id}
                author={book.author}
                image={book.image_3d}
                title={book.title}
                price={book.price}
                realcount={book.count}
              />
            )}
          </div>
        ))}

        <Link
          className="item item__special item__max"
          to="/bestsellers"
          onMouseEnter={() => setBestStatus(true)}
          onMouseLeave={() => setBestStatus(false)}
        >
          <div className="title">Бестселлеры</div>
          <div className="subtitle">Лучшие книги, полюбившиеся читателям</div>
          <div className="image">
            <IconBestsellers isActiv={bestStatus} />
          </div>
        </Link>

        <Link
          className="item item__special item__min"
          to="/faq"
          onMouseEnter={() => setFaqStatus(true)}
          onMouseLeave={() => setFaqStatus(false)}
        >
          <div className="title">FAQ</div>
          <div className="image">
            <IconFaqWoman isActiv={faqStatus} />
          </div>
        </Link>
      </div>
    </div>
  );
}
