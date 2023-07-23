import { configureStore } from "@reduxjs/toolkit";
import localReducer from "./reducer";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

export interface StoreInterface extends ToolkitStore {}
const store: StoreInterface = configureStore({
  reducer: {
    local: localReducer,
  },
});

export default store;
