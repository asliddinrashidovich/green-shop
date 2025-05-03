import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "../reducers/shoppingSlice";

const store = configureStore({
  reducer: {
    shoppingSlice,
  },
});

export default store;