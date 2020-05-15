import React from "react";
import CatalogItemContent from "./CatalogItemContent";
import CatalogItemContentMobile from "./CatalogItemContentMobile";

// Redux
import {useSelector, useDispatch} from "react-redux";

// Actions
import {addToBasket} from "../redux-actions";

export default function CatalogItem({match}) {
  const id = Number(match.params.id);

  const winWidth = useSelector(state => state.windowReducer);
  const basket = useSelector(state => state.basketReducer);
  const dispatch = useDispatch();

  const addItem = id => dispatch(addToBasket(id));

  return (
    <>
      {basket.length > 0 && winWidth > 800 && (
        <CatalogItemContent book={basket[id]} addItem={addItem} />
      )}
      {basket.length > 0 && winWidth <= 800 && (
        <CatalogItemContentMobile book={basket[id]} addItem={addItem} />
      )}
    </>
  );
}
