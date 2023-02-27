import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { iSign, User } from "../interfaces";

const initialState = {
  currentUser: {} as any | null,
  googelData: {} as any,
  businessData: {} as any,
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

    logOut: (state) => {
      state.currentUser = {};
    },
  },
});

export const { loginUser, logOut, googelSearchData, businessDataAPI } =
  authState.actions;

export default authState.reducer;
