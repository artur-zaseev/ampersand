const windowReducer = (state = 0, action) => {
  switch (action.type) {
    case "WINDOW_SET":
      return (state = action.payload);
    default:
      return state;
  }
};

export default windowReducer;
