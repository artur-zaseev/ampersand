import React from "react";

// Redux
import {useSelector} from "react-redux";

export default function BasketUserData({validation}) {
  const winWidth = useSelector(state => state.windowReducer);
  let {
    userName,
    userPhone,
    userMail,
    checkName,
    checkPhone,
    checkMail
  } = validation;

  return (
    <div className="basketUserData">
      <div className="title">Введите ваши данные</div>
      {winWidth > 800 && (
        <form>
          <div className={`user_name ${userName}`}>
            <p>ФИО</p>
            <input type="text" name="user_name" onChange={e => checkName(e)} />
          </div>
          <div className={`user_phone ${userPhone}`}>
            <p>Контактный телефон</p>
            <input type="tel" name="user_phone" onChange={e => checkPhone(e)} />
          </div>
          <div className={`user_mail ${userMail}`}>
            <p>E-mail</p>
            <input type="email" name="user_mail" onChange={e => checkMail(e)} />
          </div>
          <div className="user_comment">
            <p>Комментарий к заказу (не обязательно)</p>
            <input type="text" name="user_comment" />
          </div>
        </form>
      )}
      {winWidth <= 800 && (
        <form>
          <div className={`user_name ${userName}`}>
            <input
              type="text"
              name="user_name"
              placeholder="ФИО"
              onChange={e => checkName(e)}
            />
          </div>
          <div className={`user_phone ${userPhone}`}>
            <input
              type="tel"
              name="user_phone"
              placeholder="Контактный телефон"
              onChange={e => checkPhone(e)}
            />
          </div>
          <div className={`user_mail ${userMail}`}>
            <input
              type="email"
              name="user_mail"
              placeholder="E-mail"
              onChange={e => checkMail(e)}
            />
          </div>
          <div className="user_comment">
            <input
              type="text"
              name="user_comment"
              placeholder="Комментарий к заказу (не обязательно)"
            />
          </div>
        </form>
      )}
    </div>
  );
}
