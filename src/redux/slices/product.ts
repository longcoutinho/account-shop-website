import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { getListProduct, requestGetDetailProduct } from "@/services/product";
import { IProductDetailRes, IProductRes } from "@/interfaces/response/product";
import { requestGetListProductOrders } from "@/services/sale-order";
import { IProductOrderHistoryRes } from "@/interfaces/response";

interface IState {
  product: IProductRes[];
  productDetail: Partial<IProductDetailRes>;
  productOrder: Partial<IProductOrderHistoryRes>;
  loading: boolean;
  error: string;
}

export const fetchListProductOder = createAsyncThunk(
  "/product/order",
  async (arg: { page: number; pageSize: number; transId?: string }) => {
    const res = await requestGetListProductOrders(
      arg.page,
      arg.pageSize,
      arg.transId
    );
    return res?.data;
  }
);

export const fetchListProduct = createAsyncThunk("/product", async () => {
  const res = await getListProduct();
  return res?.data;
});

export const fetchDetailProduct = createAsyncThunk(
  "/product/detail",
  async (productId: string | number) => {
    const res = await requestGetDetailProduct(productId);
    return res?.data;
  }
);

const initialState: IState = {
  loading: false,
  product: [],
  productOrder: {},
  productDetail: {},
  error: "",
};
const slice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // list
    builder.addCase(
      fetchListProduct.pending,
      (state: WritableDraft<IState>) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchListProduct.fulfilled,
      (state: WritableDraft<IState>, action: PayloadAction<IProductRes[]>) => {
        state.loading = false;
        state.product = action.payload;
        state.error = "";
      }
    );
    builder.addCase(
      fetchListProduct.rejected,
      (state: WritableDraft<IState>) => {
        state.loading = true;
        state.product = [];
      }
    );
    // list product orders
    builder.addCase(
      fetchListProductOder.pending,
      (state: WritableDraft<IState>) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchListProductOder.fulfilled,
      (
        state: WritableDraft<IState>,
        action: PayloadAction<IProductOrderHistoryRes>
      ) => {
        state.loading = false;
        state.productOrder = action.payload;
        state.error = "";
      }
    );
    builder.addCase(
      fetchListProductOder.rejected,
      (state: WritableDraft<IState>) => {
        state.loading = true;
        state.productOrder = {};
      }
    );
    // detail
    builder.addCase(
      fetchDetailProduct.pending,
      (state: WritableDraft<IState>) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchDetailProduct.fulfilled,
      (
        state: WritableDraft<IState>,
        action: PayloadAction<IProductDetailRes>
      ) => {
        state.loading = false;
        state.productDetail = action.payload;
        state.error = "";
      }
    );
    builder.addCase(
      fetchDetailProduct.rejected,
      (state: WritableDraft<IState>) => {
        state.loading = true;
        state.productDetail = {};
      }
    );
  },
});

export default slice.reducer;
