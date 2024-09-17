import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import {
  requestGetListDistricts,
  requestGetListProvinces,
  requestGetListWards,
} from "@/services/address";
import {
  IDistrictRes,
  IProvinceRes,
  IWardRes,
} from "@/interfaces/response/address";

interface IState {
  provinces: IProvinceRes[];
  districts: IDistrictRes[];
  wards: IWardRes[];
  loading: boolean;
  error: string;
}

export const fetchListProvinces = createAsyncThunk("/provinces", async () => {
  const res = await requestGetListProvinces();
  return res?.data?.data;
});

export const fetchListDistricts = createAsyncThunk(
  "/districts",
  async (provinceId: string) => {
    const res = await requestGetListDistricts(provinceId);
    return res?.data?.data;
  }
);

export const fetchListWards = createAsyncThunk(
  "/wards",
  async (districtId: string) => {
    const res = await requestGetListWards(districtId);
    return res?.data?.data;
  }
);

const initialState: IState = {
  loading: false,
  provinces: [],
  districts: [],
  wards: [],
  error: "",
};
const slice = createSlice({
  name: "address",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // list provinces
    builder.addCase(
      fetchListProvinces.pending,
      (state: WritableDraft<IState>) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchListProvinces.fulfilled,
      (state: WritableDraft<IState>, action: PayloadAction<IProvinceRes[]>) => {
        state.loading = false;
        state.provinces = action.payload;
        state.error = "";
      }
    );
    builder.addCase(
      fetchListProvinces.rejected,
      (state: WritableDraft<IState>) => {
        state.loading = true;
        state.provinces = [];
      }
    );
    // list districts
    builder.addCase(
      fetchListDistricts.pending,
      (state: WritableDraft<IState>) => {
        state.loading = true;
      }
    );
    builder.addCase(
      fetchListDistricts.fulfilled,
      (state: WritableDraft<IState>, action: PayloadAction<IDistrictRes[]>) => {
        state.loading = false;
        state.districts = action.payload;
        state.error = "";
      }
    );
    builder.addCase(
      fetchListDistricts.rejected,
      (state: WritableDraft<IState>) => {
        state.loading = true;
        state.districts = [];
      }
    );
    // list wards
    builder.addCase(fetchListWards.pending, (state: WritableDraft<IState>) => {
      state.loading = true;
    });
    builder.addCase(
      fetchListWards.fulfilled,
      (state: WritableDraft<IState>, action: PayloadAction<IWardRes[]>) => {
        state.loading = false;
        state.wards = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchListWards.rejected, (state: WritableDraft<IState>) => {
      state.loading = true;
      state.wards = [];
    });
  },
});

export default slice.reducer;
