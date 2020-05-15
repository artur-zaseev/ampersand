const faqReducer = (state = [], action) => {
  switch (action.type) {
    case "FAQ_SYNC":
      return (state = [...action.payload]);
    default:
      return state;
  }
};

export default faqReducer;
