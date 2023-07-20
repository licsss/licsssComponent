import React from "react";
import { ResponseType } from "../../../functions";
export interface FormContextProps<T = ResponseType> {
    Response?: T;
    setResponse: (response: T | undefined) => void;
}
declare const _default: React.Context<FormContextProps<ResponseType<object, string[] | {
    [key: string]: string[];
}>>>;
export default _default;
export interface UseFormProps<T = ResponseType> extends FormContextProps<T> {
    Response: T | undefined;
    setResponse: (response: T | undefined) => void;
}
export declare function useForm<T = ResponseType>(): UseFormProps<T>;
