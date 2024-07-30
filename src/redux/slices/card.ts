import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { requestGetListCards } from "@/services/rechargeGameCard";
import { ICardsRes } from "@/interfaces/response/rechargeGameCard";

interface IState {
  cards: ICardsRes[];
  loading: boolean;
  error: string;
}

export const fetchListCard = createAsyncThunk("/card", async () => {
  const res = await requestGetListCards();
  return res?.data;
});

// export const fetchDetailCard = createAsyncThunk(
//   "/card/detail",
//   async (id: string | number) => {
//     const res = await requestGetItemCard(id?.toString());
//     return res?.data;
//   }
// );

const initialState: IState = {
  loading: false,
  cards: [],
  error: "",
};
const slice = createSlice({
  name: "card",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // list
    builder.addCase(fetchListCard.pending, (state: WritableDraft<IState>) => {
      state.loading = true;
    });
    builder.addCase(
      fetchListCard.fulfilled,
      (state: WritableDraft<IState>, action: PayloadAction<ICardsRes[]>) => {
        state.loading = false;
        state.cards = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchListCard.rejected, (state: WritableDraft<IState>) => {
      state.loading = true;
      state.cards = [];
    });
    // detail
    // builder.addCase(fetchDetailCard.pending, (state: WritableDraft<IState>) => {
    //   state.loading = true;
    // });
    // builder.addCase(
    //   fetchDetailCard.fulfilled,
    //   (
    //     state: WritableDraft<IState>,
    //     action: PayloadAction<IProductDetailRes>
    //   ) => {
    //     state.loading = false;
    //     state.productDetail = action.payload;
    //     state.error = "";
    //   }
    // );
    // builder.addCase(
    //   fetchDetailCard.rejected,
    //   (state: WritableDraft<IState>) => {
    //     state.loading = true;
    //     state.productDetail = {};
    //   }
    // );
  },
});

export default slice.reducer;
