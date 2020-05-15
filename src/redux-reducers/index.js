import {combineReducers} from "redux";

import basketReducer from "./basket";
import windowReducer from "./window_width";
import faqReducer from "./faq";

const allReducers = combineReducers({basketReducer, windowReducer, faqReducer});

export default allReducers;
