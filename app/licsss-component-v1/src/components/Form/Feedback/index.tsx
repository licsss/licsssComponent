import React from "react";
import { FormControl } from "react-bootstrap";
import Context, { FormContextProps } from "../Context";
import { ResponseType } from "../../../functions";

export interface FeedbackInterface extends React.PropsWithChildren {
  validMessage?: React.ReactElement | string;
  invalidMessage?: React.ReactElement | string;
  name?: string;
}
export default function Feedback(props: FeedbackInterface): React.ReactElement {
  const FormContext: FormContextProps<
    ResponseType<object, { [key: string]: string[] }>
  > = React.useContext(Context) as FormContextProps<
    ResponseType<object, { [key: string]: string[] }>
  >;
  return (
    <>
      {props.children}
      {props.validMessage && (
        <FormControl.Feedback>{props.validMessage}</FormControl.Feedback>
      )}
      {props.name && FormContext.Response?.error?.messages[props.name] && (
        <div className="text-danger">
          <ul>
            {Array.isArray(FormContext.Response?.error?.messages[props.name]) &&
              FormContext.Response?.error?.messages[props.name].map(
                (message) => <li key={`${props.name}-${message}`}>{message}</li>
              )}
          </ul>
        </div>
      )}
      {props.invalidMessage && (
        <FormControl.Feedback type="invalid">
          {props.invalidMessage}
        </FormControl.Feedback>
      )}
    </>
  );
}
