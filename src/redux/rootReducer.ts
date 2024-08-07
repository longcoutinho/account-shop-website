import { combineReducers } from "@reduxjs/toolkit";
import cart from "./slices/cart";
import user from "./slices/user";
import product from "./slices/product";
import typeProduct from "./slices/typeProduct";
import payment from "./slices/payment";
import card from "./slices/card";

const rootReducer = combineReducers({
  cart: cart,
  user,
  product,
  typeProduct,
  payment,
  card,
});

export default rootReducer;
