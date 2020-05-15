import React, {useState} from "react";
import {Link} from "react-router-dom";
import BookItem from "../modules/BookItem";
import BookItemMobile from "../modules/BookItemMobile";

// Images
import {ReactComponent as Logo} from "../static/logo.svg";
import {IconBooks} from "../static/modules/iconBooks/IconBooks";
import {IconFaq} from "../static/modules/IconFaq/IconFaq";

// Redux
import {useSelector} from "react-redux";

export default function Bestsellers() {
  let [faqStatus, setFaqStatus] = useState(false);
  let [booksStatus, setbooksStatus] = useState(false);
  const winWidth = useSelector(state => state.windowReducer);
  const basket = useSelector(state => state.basketReducer);

  return (
    <div className="bestsellers">
      <div className="page_title">
        <h1>
          <Logo />
          <span>Бестселлеры</span>
        </h1>
      </div>

      <div className="best_items">
        {basket.map(
          book =>
            book.isBestseller === true && (
              <div className="item" key={book.id}>
                {winWidth > 500 && (
                  <BookItem
                    setClass={"book_item_resp"}
                    author={book.author}
                    image={book.image_3d}
                    title={book.title}
                    price={book.price}
                    id={book.id}
                    realcount={book.count}
                  />
                )}
                {winWidth <= 500 && (
                  <BookItemMobile
                    author={book.author}
                    image={book.image_3d}
                    title={book.title}
                    price={book.price}
                    id={book.id}
                    realcount={book.count}
                  />
                )}
              </div>
            )
        )}
      </div>

      <div className="best_bottom">
        <Link
          className="inner inner__max"
          to="/catalog"
          onMouseEnter={() => setbooksStatus(true)}
          onMouseLeave={() => setbooksStatus(false)}
        >
          <div className="title">Каталог</div>
          <div className="text text__max">
            Больше книг представлено в нашем в каталоге
          </div>
          <div className="image image__max">
            <IconBooks isActiv={booksStatus} />
          </div>
        </Link>

        <Link
          className="inner inner__min"
          to="/faq"
          onMouseEnter={() => setFaqStatus(true)}
          onMouseLeave={() => setFaqStatus(false)}
        >
          <div className="title">FAQ</div>
          <div className="text text__min">Ответы на частые вопросы</div>
          <div className="image image__min">
            <IconFaq isActiv={faqStatus} />
          </div>
        </Link>
      </div>
    </div>
  );
}
