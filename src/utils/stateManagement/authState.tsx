import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { iSign, User } from "../interfaces";

const initialState = {
	currentUser: {} as any | null,
	googelData: {} as any,
};

const authState = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginUser: (state, { payload }: PayloadAction<iSign>) => {
			state.currentUser = payload;
		},

		logOut: (state) => {
			state.currentUser = null;
		},

		googelSearchData: (state, { payload }: PayloadAction) => {
			state.googelData = payload;
		},
	},
});

export const { loginUser, logOut, googelSearchData } = authState.actions;

export default authState.reducer;
