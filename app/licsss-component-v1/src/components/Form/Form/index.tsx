import React from "react";
import Bootstrap, { Form } from "react-bootstrap";

export interface FormProps extends Bootstrap.FormProps {}
export default React.forwardRef(
  (props: FormProps, ref: React.ForwardedRef<HTMLFormElement>): JSX.Element => {
    let Prop: FormProps = { ...props };
    if (Prop.noValidate === undefined) Prop.noValidate = true;
    Prop.onSubmit = onSubmit;

    const [Validated, setValidated] = React.useState<boolean>(
      Prop.validated === undefined ? false : Prop.validated
    );

    async function onSubmit(
      e: React.FormEvent<HTMLFormElement>
    ): Promise<void> {
      e.preventDefault();
      if (!e.currentTarget.checkValidity()) {
        e.stopPropagation();
        setValidated(true);
        return;
      }
      setValidated(false);
      if (!props.onSubmit) return;
      return await props.onSubmit(e);
    }
    console.log(Bootstrap);
    return <Form {...Prop} validated={Validated} ref={ref} />;
  }
);
