import React from "react";
import BasketItemMobile from "./BasketItemMobile";

export default ({basket}) => (
  <div className="mobile">
    <div className="items">
      {basket.map((item, index) => (
        <BasketItemMobile key={index} id={item.id} />
      ))}
    </div>
  </div>
);
