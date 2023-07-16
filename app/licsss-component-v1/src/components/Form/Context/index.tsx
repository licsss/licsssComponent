import React from "react";
import { ResponseType } from "../../../functions";

export interface FormContextProps<T = ResponseType> {
  Response?: T;
}
export default React.createContext<FormContextProps>({
  Response: undefined,
});

export interface UseFormProps<T = ResponseType> extends FormContextProps<T> {
  Response: T | undefined;
  setResponse: (response: T | undefined) => void;
}
export function useForm<T = ResponseType>(): UseFormProps<T> {
  const [Response, changeResponse] = React.useState<T | undefined>(undefined);

  function setResponse(response: T | undefined): void {
    changeResponse(response === undefined ? undefined : { ...response });
  }
  return {
    Response: Response,
    setResponse: setResponse,
  };
}
