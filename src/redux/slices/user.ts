import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/interfaces";
import { getUserBalance } from "@/services/userService";
import { WritableDraft } from "immer/dist/internal";

interface IState {
  user: Partial<User>;
  loading: boolean;
  error: string;
  isLogin: boolean;
}

export const fetchInfoUser = createAsyncThunk("/user", async (id: string) => {
  const res = await getUserBalance(id);
  return res?.data;
});

const initialState: IState = {
  loading: false,
  user: {},
  error: "",
  isLogin: false,
};
const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setIsLogin: (
      state: WritableDraft<IState>,
      action: PayloadAction<boolean>
    ) => {
      state.isLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInfoUser.pending, (state: WritableDraft<IState>) => {
      state.loading = true;
    });
    builder.addCase(
      fetchInfoUser.fulfilled,
      (state: WritableDraft<IState>, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchInfoUser.rejected, (state: WritableDraft<IState>) => {
      state.loading = true;
      state.user = {};
    });
  },
});
export const { setIsLogin } = slice.actions;

export default slice.reducer;
