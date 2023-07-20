import React from "react";
import { FormControl } from "react-bootstrap";
import Context, { FormContextProps } from "../Context";
import { ResponseType } from "../../../functions";

export interface FeedbackProps extends React.PropsWithChildren {
  validMessage?: React.ReactElement | string;
  invalidMessage?: React.ReactElement | string;
  name?: string;
}
export default function Feedback(props: FeedbackProps): React.ReactElement {
  const FormContext: FormContextProps<
    ResponseType<object, { [key: string]: string[] }>
  > = React.useContext(Context) as FormContextProps<
    ResponseType<object, { [key: string]: string[] }>
  >;
  const invalidMessages: UseFeedback = React.useContext(
    FeedbackContext
  ) as UseFeedback;

  React.useEffect(() => {
    if (!invalidMessages.changeResponse) return;
    invalidMessages.changeResponse(FormContext.Response);
  }, [FormContext.Response, invalidMessages]);
  return (
    <>
      {props.children}
      {props.validMessage && (
        <FormControl.Feedback>{props.validMessage}</FormControl.Feedback>
      )}
      {invalidMessages.invalidMessages !== false && (
        <div className="text-danger">
          <ul>
            {invalidMessages.invalidMessages.map((message) => (
              <li key={`${props.name}-${message}`}>{message}</li>
            ))}
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

export interface FeedbackContextInterface {
  name: string;
  invalidMessages: string[] | false;
}
export interface UseFeedback extends FeedbackContextInterface {
  changeInvalidMessages: (props: string[] | false) => void;
  changeResponse: (
    props: ResponseType<object, { [key: string]: string[] }> | undefined
  ) => void;
}
export const FeedbackContext: React.Context<UseFeedback> =
  React.createContext<UseFeedback>({
    name: "",
    invalidMessages: false,
    changeInvalidMessages: (p) => "",
    changeResponse: (p) => "",
  });
export function useFeedback(props: FeedbackContextInterface): UseFeedback {
  const [invalidMessages, setInvalidMessages] = React.useState<
    string[] | false
  >(props.invalidMessages);

  function changeInvalidMessages(invalidMessages: string[] | false): void {
    setInvalidMessages(
      invalidMessages === false ? false : [...invalidMessages]
    );
  }
  function changeResponse(
    response: ResponseType<object, { [key: string]: string[] }> | undefined
  ): void {
    let invalidMessages: string[] | false = false;
    if (
      response !== undefined &&
      !response.status.result &&
      response.error?.messages[props.name] &&
      Array.isArray(response.error?.messages[props.name])
    )
      invalidMessages = response.error.messages[props.name];
    changeInvalidMessages(invalidMessages);
  }
  return {
    name: props.name,
    invalidMessages: invalidMessages,
    changeInvalidMessages: changeInvalidMessages,
    changeResponse: changeResponse,
  };
}
