import { configureStore } from "@reduxjs/toolkit";
import reducer from "./authState";

const store = configureStore({
  reducer,
});

export default store;
