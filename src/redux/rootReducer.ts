import { combineReducers } from "@reduxjs/toolkit";
import cart from "./slices/cart";
import user from "./slices/user";
import product from "./slices/product";
import typeProduct from "./slices/typeProduct";
import payment from "./slices/payment";

const rootReducer = combineReducers({
  cart: cart,
  user,
  product,
  typeProduct,
  payment,
});

export default rootReducer;
