import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@/interfaces";
import { getUserBalance } from "@/services/userService";

interface IState {
  user: Partial<User>;
  loading: boolean;
  error: string;
}

export const fetchInfoUser = createAsyncThunk("/user", async (id: string) => {
  const res = await getUserBalance(id);
  return res?.data;
});

const initialState: IState = {
  loading: false,
  user: {},
  error: "",
};
const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInfoUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchInfoUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(fetchInfoUser.rejected, (state) => {
      state.loading = true;
      state.user = {};
    });
  },
});

export default slice.reducer;
