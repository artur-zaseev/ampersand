import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import BasketEmpty from "../modules/BasketEmpty";
import BasketUserData from "../modules/BasketUserData";
import BasketDesktop from "../modules/BasketDesktop";
import BasketMobile from "../modules/BasketMobile";
import BasketFooterDesktop from "../modules/BasketFooterDesktop";
import BasketFooterMobile from "../modules/BasketFooterMobile";

// Images
import {ReactComponent as Logo} from "../static/logo.svg";

// Redux
import {useSelector} from "react-redux";

export default function Basket() {
  const winWidth = useSelector(state => state.windowReducer);
  const basket = useSelector(state => state.basketReducer);

  let [summ, setSumm] = useState(0);
  let [booksCount, setBooksCount] = useState(0);
  let [notEmptyBooks, setNotEmptyBooks] = useState(0);

  let [page, setPage] = useState("main");
  let [userName, setName] = useState(false);
  let [userPhone, setPhone] = useState(false);
  let [userMail, setMail] = useState(false);
  let [isValid, setValid] = useState(false);

  useEffect(() => {
    const _summ = basket.reduce((acc, val) => acc + val.count * val.price, 0);
    setSumm(_summ);
  }, [basket]);

  useEffect(() => {
    const _booksCount = basket
      .filter(book => book.count > 0)
      .reduce((acc, val) => acc + val.count, 0);
    setBooksCount(_booksCount);
  }, [basket]);

  useEffect(() => {
    const _notEmpty = basket.filter(book => book.count > 0);
    setNotEmptyBooks(_notEmpty);
  }, [basket]);

  useEffect(() => {
    checkAll();
  });

  const checkName = e => {
    e.target.value !== "" ? setName(true) : setName("invalid");
  };

  const checkPhone = e => {
    e.target.value !== "" ? setPhone(true) : setPhone("invalid");
  };

  const checkMail = e => {
    e.target.value !== "" ? setMail(true) : setMail("invalid");
  };

  const highLight = () => {
    userName !== true && setName("invalid");
    userPhone !== true && setPhone("invalid");
    userMail !== true && setMail("invalid");
  };

  const checkAll = () => {
    if (userName === true && userPhone === true && userMail === true) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const switchContent = () => {
    page === "main" && setPage("user");
  };

  return (
    <div className="basket">
      <div className="page_title">
        <h1>
          <Logo />
          <span>Корзина</span>
        </h1>
      </div>

      <div className="basket_body">
        {page === "main" && notEmptyBooks.length > 0 && (
          <div className="list">
            {winWidth > 800 && <BasketDesktop basket={notEmptyBooks} />}
            {winWidth <= 800 && <BasketMobile basket={notEmptyBooks} />}
          </div>
        )}

        {page === "main" && notEmptyBooks.length < 1 && <BasketEmpty />}

        {page === "user" && (
          <BasketUserData
            validation={{
              userName,
              setName,
              userPhone,
              setPhone,
              userMail,
              setMail,
              checkName,
              checkPhone,
              checkMail
            }}
          />
        )}

        {notEmptyBooks.length > 0 && (
          <div className="summ">
            <div className="top">
              {notEmptyBooks.length > 1 && (
                <div className="count">
                  <div className="left">Количество</div>
                  <div className="right">{booksCount}</div>
                </div>
              )}

              {notEmptyBooks.length > 1 && <div className="delimiter"></div>}

              <div className={`prise`}>
                <span className="text">Общая стоимость</span>
                <div className="data">
                  <strong>{summ}</strong>
                  <span className="small">₽</span>
                </div>
              </div>
            </div>

            <div className="lid_button">
              {page === "main" && (
                <button onClick={() => switchContent()}>оформить заказ</button>
              )}

              {page === "user" && isValid && (
                <Link to="/ready">оформить заказ</Link>
              )}

              {page === "user" && !isValid && (
                <button onClick={() => highLight()}>оформить заказ</button>
              )}

              <div className="bottom">
                <p>
                  Доступные способы и время доставки можно узнать при оформлении
                  заказа
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {winWidth > 800 && (
        <BasketFooterDesktop basketLength={notEmptyBooks.length} />
      )}
      {winWidth <= 800 && notEmptyBooks.length > 0 && (
        <BasketFooterMobile basketLength={notEmptyBooks.length} />
      )}
    </div>
  );
}
