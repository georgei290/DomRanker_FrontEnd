import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { iSign, User } from "../interfaces";

const initialState = {
	currentUser: {} as any | null,
	googelData: {} as any,
	businessData: {} as any,
	onPageData: {} as any,
	ContentSummaryData: {} as any,
	contentSearchData: {} as any,
	keywordData: {} as any,
	keywordID: "",
	baiduID: "",
	naverID: "",
	seznamID: "",
	items: {} as any
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

		storeBaiduId: (state, { payload }) => {
			state.baiduID = payload;
		},

		storeNaverId: (state, { payload }) => {
			state.naverID = payload;
		},

		StoreseznamID: (state, { payload }) => {
			state.seznamID = payload;
		},

		StoreContentSummary: (state, { payload }) => {
			state.ContentSummaryData = payload;
		},

		StoreContentSearch: (state, { payload }) => {
			state.contentSearchData = payload;
		},


		storeItems: (state, {payload}) => {
			state.items = payload;

		StoreKeywordData: (state, { payload }) => {
			state.keywordData = payload;

		},

		clearData: (state) => {
			state.googelData = null;
			// state.baiduID = "";
			// state.naverID = "";
			// state.seznamID = "";
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
	storeBaiduId,
	storeNaverId,
	StoreseznamID,
	clearData,
	StoreContentSearch,
	StoreContentSummary,

	storeItems,

	StoreKeywordData,

} = authState.actions;

export default authState.reducer;
