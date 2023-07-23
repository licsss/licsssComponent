import React from "react";
import { Reducer } from "redux";
import { ReduxProps } from "./Redux";
import { StoreInterface } from "./Redux/store";
import { ActionInterface } from "./Redux/reducer";
export interface WrapperInterface {
    Redux: {
        Redux: (props: ReduxProps) => React.ReactElement;
        store: StoreInterface;
        reducer: Reducer<any>;
    } & ActionInterface;
}
declare const Wrapper: WrapperInterface;
export default Wrapper;
