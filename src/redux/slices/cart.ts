import { ITotalPriceWithPayment } from "@/components/BuyCard/RightInfo";
import { IListOrder } from "@/components/Payment";
import { ICardsRes } from "@/interfaces/response/rechargeGameCard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

interface IOrderDetail {
  item?: ICardsRes;
  price: ITotalPriceWithPayment[];
  amount: number;
}
interface IState {
  itemInCart: number;
  order: IListOrder[];
  buyNow: boolean;
  orderDetail: IOrderDetail[];
}

const initialState: IState = {
  itemInCart: 0,
  order: [],
  buyNow: false,
  orderDetail: [],
};

const slicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemInCart: (
      state: WritableDraft<IState>,
      action: PayloadAction<number>
    ) => {
      state.itemInCart = action.payload;
    },
    setBuyNow: (
      state: WritableDraft<IState>,
      action: PayloadAction<boolean>
    ) => {
      state.buyNow = action.payload;
    },
    setOrderDetail: (
      state: WritableDraft<IState>,
      action: PayloadAction<IOrderDetail[]>
    ) => {
      state.orderDetail = action.payload;
    },
  },
});

export const { setItemInCart, setBuyNow, setOrderDetail } = slicer.actions;

export default slicer.reducer;
