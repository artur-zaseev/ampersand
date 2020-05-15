import React from "react";
import {Link} from "react-router-dom";

export default function CatalogItemContentMobile({book, addItem}) {
  return (
    <div className="cat_item_mobile">
      <div className="image">
        <img src={book.image_3d} alt="" />
      </div>

      <div className="price">{book.price} ₽</div>

      <div className="add_to_basket">
        {book.count < 1 && (
          <button onClick={() => addItem(book.id)}>добавить в корзину</button>
        )}

        {book.count > 0 && (
          <Link to="/basket">
            <button>перейти в корзину</button>
          </Link>
        )}
      </div>

      <div className="cat_item_mobile_body">
        <div className="text">
          <div className="author">{book.author}</div>
          <div className="title">{book.title}</div>
          <div className="cat_item_info">
            <div className="annotate">
              <span>Аннотация</span>
              {book.annotate}
            </div>
            {book.review.length > 0 && (
              <div className="review">
                <span>Отзыв</span>
                {book.review}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
