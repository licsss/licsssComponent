import React from "react";
import Bootstrap, { Form } from "react-bootstrap";
import FormContext, { UseFormProps, useForm } from "../Context";
import { ResponseType } from "../../../functions";
import Alert, { AlertProps } from "../../Component/Alert";

export interface FormProps extends Bootstrap.FormProps {
  successMessage?: React.ReactElement | false;
  Response?: ResponseType;
}
export default React.forwardRef(
  (
    {
      validated = false,
      noValidate = true,
      onSubmit = undefined,
      successMessage = false,
      Response = undefined,
      ...props
    }: FormProps,
    ref: React.ForwardedRef<HTMLFormElement>
  ): React.ReactElement => {
    const FormContextValue: UseFormProps<ResponseType> =
      useForm<ResponseType>();
    const [Validated, setValidated] = React.useState<boolean>(validated);

    React.useEffect(() => {
      setValidated(validated);
    }, [validated]);

    async function doSubmit(
      e: React.FormEvent<HTMLFormElement>
    ): Promise<void> {
      e.preventDefault();
      if (!e.currentTarget.checkValidity()) {
        e.stopPropagation();
        setValidated(true);
        return;
      }
      setValidated(false);
      if (onSubmit) await onSubmit(e);
      if (Response) FormContextValue.setResponse(Response);
    }
    return (
      <FormContext.Provider value={FormContextValue}>
        <FormNotification
          Response={FormContextValue}
          successMessage={successMessage}
        />
        <Form
          {...props}
          ref={ref}
          validated={Validated}
          noValidate={noValidate}
          onSubmit={doSubmit}
        />
      </FormContext.Provider>
    );
  }
);

export interface FormNotificationProps {
  Response: UseFormProps;
  successMessage?: React.ReactElement | false;
}
export const FormNotification = React.forwardRef(
  (
    props: FormNotificationProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement => {
    if (!props.Response.Response || props.successMessage === false)
      return <></>;
    let AlertProp: AlertProps = {};
    if (props.Response.Response.status.result) {
      AlertProp["name"] = "info";
      AlertProp["variant"] = "success";
      AlertProp["children"] = props.successMessage || "処理が完了しました";
    } else {
      AlertProp["name"] = "exclamation";
      AlertProp["Heading"] = (
        <>
          {`[${props.Response.Response.error?.abstract}]${props.Response.Response.error?.title}`}
        </>
      );
      AlertProp["children"] = (
        <ul>
          {props.Response.Response.error?.messages.map(
            (message: string): React.ReactElement => (
              <li key={message}>{message}</li>
            )
          )}
        </ul>
      );
    }
    return <Alert {...AlertProp} ref={ref} />;
  }
);
