const basketReducer = (state = [], action) => {
  switch (action.type) {
    case "BASKET_SYNC":
      return (state = [...action.payload]);
    case "BASKET_ADD":
      return (state = [...action.payload]);
    case "BASKET_REDUCE":
      return (state = [...action.payload]);
    case "BASKET_REMOVE":
      return (state = [...action.payload]);
    case "BASKET_UPDATE_ALL":
      return (state = [...action.payload]);
    default:
      return state;
  }
};

export default basketReducer;
