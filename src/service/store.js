import { configureStore } from "@reduxjs/toolkit";
import hrnetReducer from "./hrnetSlice";

const store = configureStore({
  reducer: {
    hrnet: hrnetReducer,
  },
});

export default store;
