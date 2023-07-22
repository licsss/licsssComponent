import { configureStore } from "@reduxjs/toolkit";
import localReducer from "./reducer";

const store = configureStore({
  reducer: {
    local: localReducer,
  },
});

export default store;
