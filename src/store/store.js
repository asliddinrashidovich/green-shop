import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "../reducers/shoppingSlice";
import languageReducer from '../reducers/languageSlice';

const store = configureStore({
  reducer: {
    shoppingSlice,
    language: languageReducer
  },
});

export default store;