import { combineReducers } from "@reduxjs/toolkit";
import cart from "./slices/cart";
import user from "./slices/user";
import product from "./slices/product";
import typeProduct from "./slices/typeProduct";
import payment from "./slices/payment";
import card from "./slices/card";
import address from "./slices/address";
import state from "./slices/state";

const rootReducer = combineReducers({
  cart: cart,
  user,
  product,
  typeProduct,
  payment,
  card,
  address,
  state,
});

export default rootReducer;
