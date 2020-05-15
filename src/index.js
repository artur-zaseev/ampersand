import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./modules/App";

// REDUX
import {createStore} from "redux";
import {Provider} from "react-redux";
import allReducers from "./redux-reducers/";

// REDUX - Store
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(() => {
//   console.log("state", store.getState());
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
