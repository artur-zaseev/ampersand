import data from "../modules/Data";

const writeStorage = arr => (localStorage.basket = JSON.stringify(arr));

const getStorage = () =>
  localStorage.basket ? JSON.parse(localStorage.basket) : [];

export const syncBasket = () => {
  let allData = data.books.map(dataBook => {
    let basketItem = getStorage().filter(
      basketBook => dataBook.id === basketBook.id
    );
    if (basketItem.length > 0) {
      return basketItem[0];
    } else {
      dataBook.count = 0;
      return dataBook;
    }
  });
  writeStorage(allData);
  return {
    type: "BASKET_SYNC",
    payload: allData
  };
};

export const addToBasket = id => {
  const new_arr = getStorage().map(book => {
    if (book.id === id) {
      book.count += 1;
      return book;
    } else {
      return book;
    }
  });
  writeStorage(new_arr);
  return {
    type: "BASKET_ADD",
    payload: new_arr
  };
};

export const reduceFromBasket = id => {
  let _arr = getStorage().map(book => {
    if (book.id === id && book.count > 0) {
      book.count -= 1;
      return book;
    } else {
      return book;
    }
  });
  writeStorage(_arr);
  return {
    type: "BASKET_REDUCE",
    payload: _arr
  };
};

export const removeFromBasket = id => {
  const _arr = getStorage().map(book => {
    if (book.id === id) {
      book.count = 0;
      return book;
    } else {
      return book;
    }
  });
  writeStorage(_arr);
  return {
    type: "BASKET_REMOVE",
    payload: _arr
  };
};

export const updateAllBasket = arr => {
  writeStorage(arr);
  return {
    type: "BASKET_UPDATE_ALL",
    payload: [...arr]
  };
};
