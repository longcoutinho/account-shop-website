import { combineReducers } from "@reduxjs/toolkit";
import cart from "./slices/cart";
import user from "./slices/user";
import product from "./slices/product";
import typeProduct from "./slices/typeProduct";

const rootReducer = combineReducers({
  cart: cart,
  user,
  product,
  typeProduct,
});

export default rootReducer;
