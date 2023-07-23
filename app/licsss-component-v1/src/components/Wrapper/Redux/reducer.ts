import Toolkit, { createSlice } from "@reduxjs/toolkit";
import { getStorage } from "../../../functions";

export interface SliceInterface
  extends Toolkit.Slice<
    any,
    {
      addLocal(state: any, action: { payload: any; type: string }): void;
      removeLocal(state: any, action: { payload: any; type: string }): void;
    },
    string
  > {}

const localSlice: SliceInterface = createSlice({
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

export interface ActionInterface {
  addLocal: Toolkit.ActionCreatorWithPayload<any, `${string}/addLocal`>;
  removeLocal: Toolkit.ActionCreatorWithPayload<any, `${string}/removeLocal`>;
}
export const { addLocal, removeLocal }: ActionInterface = localSlice.actions;
export default localSlice.reducer as Toolkit.Reducer<any>;
