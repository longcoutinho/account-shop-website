import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

interface IState {
  state: boolean;
  tabHistory: string;
}

const initialState: IState = {
  state: false,
  tabHistory: "1",
};

const slicer = createSlice({
  name: "state",
  initialState,
  reducers: {
    setState: (
      state: WritableDraft<IState>,
      action: PayloadAction<boolean>
    ) => {
      state.state = action.payload;
    },
    setTabHistory: (
      state: WritableDraft<IState>,
      action: PayloadAction<string>
    ) => {
      state.tabHistory = action.payload;
    },
  },
});

export const { setState, setTabHistory } = slicer.actions;

export default slicer.reducer;
