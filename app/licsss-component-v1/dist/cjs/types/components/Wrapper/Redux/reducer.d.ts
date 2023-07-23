import Toolkit from "@reduxjs/toolkit";
export interface SliceInterface extends Toolkit.Slice<any, {
    addLocal(state: any, action: {
        payload: any;
        type: string;
    }): void;
    removeLocal(state: any, action: {
        payload: any;
        type: string;
    }): void;
}, string> {
}
export interface ActionInterface {
    addLocal: Toolkit.ActionCreatorWithPayload<any, `${string}/addLocal`>;
    removeLocal: Toolkit.ActionCreatorWithPayload<any, `${string}/removeLocal`>;
}
export declare const addLocal: Toolkit.ActionCreatorWithPayload<any, `${string}/addLocal`>, removeLocal: Toolkit.ActionCreatorWithPayload<any, `${string}/removeLocal`>;
declare const _default: Toolkit.Reducer<any, Toolkit.AnyAction>;
export default _default;
