import { combineReducers } from "@reduxjs/toolkit";
import cart from "./slices/cart";
import user from "./slices/user";

const rootReducer = combineReducers({
  cart: cart,
  user,
});

export default rootReducer;
