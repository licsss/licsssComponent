import React from "react";
import { Reducer } from "redux";
import Redux, { ReduxProps } from "./Redux";
import store, { StoreInterface } from "./Redux/store";
import reducer, {
  ActionInterface,
  addLocal,
  removeLocal,
} from "./Redux/reducer";

export interface WrapperInterface {
  Redux: {
    Redux: (props: ReduxProps) => React.ReactElement;
    store: StoreInterface;
    reducer: Reducer<any>;
  } & ActionInterface;
}
const Wrapper: WrapperInterface = {
  Redux: {
    Redux: Redux,
    store: store,
    reducer: reducer,
    addLocal: addLocal,
    removeLocal: removeLocal,
  },
};
export default Wrapper;
