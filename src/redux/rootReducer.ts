import { combineReducers } from "@reduxjs/toolkit";
import cart from "./slices/cart";

const rootReducer = combineReducers({
  cart: cart,
});

export default rootReducer;
