import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { iSign, User } from "../interfaces";

const initialState = {
  currentUser: {} as any | null,
  googelData: {} as any,
  businessData: {} as any,
  onPageData: {} as any,
};

const authState = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<iSign>) => {
      state.currentUser = payload;
    },

    googelSearchData: (state, { payload }: PayloadAction) => {
      state.googelData = payload;
    },

    businessDataAPI: (state, { payload }: PayloadAction) => {
      state.businessData = payload;
    },

    onPageAPI: (state, { payload }: PayloadAction) => {
      state.onPageData = payload;
    },

    logOut: (state) => {
      state.currentUser = {};
      state.googelData = {};
      state.businessData = {};
      state.onPageData = {};
    },
  },
});

export const {
  loginUser,
  logOut,
  googelSearchData,
  businessDataAPI,
  onPageAPI,
} = authState.actions;

export default authState.reducer;
