import { createSlice } from "@reduxjs/toolkit";
import { getStorage } from "../../../functions";

const localSlice = createSlice({
  name: "local",
  initialState: getStorage("local"),
  reducers: {
    addLocal(state, action) {
      state[action.payload.key] = action.payload.value;
    },
    removeLocal(state, action) {
      delete state[action.payload.key];
    },
  },
});

export const { addLocal, removeLocal } = localSlice.actions;
export default localSlice.reducer;
