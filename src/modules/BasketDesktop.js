import React from "react";
import BasketItem from "./BasketItem";

export default ({basket}) => (
  <div className="desktop">
    <div className="top">
      <div className="title">Название книги</div>
      <div className="count">Количество</div>
      <div className="price">Цена</div>
    </div>
    <div className="items">
      {basket.map((item, index) => (
        <BasketItem key={index} id={item.id} />
      ))}
    </div>
  </div>
);
