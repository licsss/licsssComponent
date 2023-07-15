import React, { useEffect, useState } from "react";
import Bootstrap, { Form } from "react-bootstrap";

export interface FormProps extends Bootstrap.FormProps {}
export default React.forwardRef(
  (
    { validated = false, noValidate = true, ...props }: FormProps,
    ref: React.ForwardedRef<HTMLFormElement>
  ): JSX.Element => {
    const [Prop, setProp] = useState<FormProps>({
      ...props,
      onSubmit: onSubmit,
      validated: validated,
      noValidate: noValidate,
    });

    useEffect(() => {
      setProp({
        ...Prop,
        onSubmit: onSubmit,
        validated: validated,
        noValidate: noValidate,
      });
    }, [props, validated, noValidate]);
    function changeValidated() {
      Prop["validated"] = !Prop["validated"];
      setProp({ ...Prop });
    }
    async function onSubmit(
      e: React.FormEvent<HTMLFormElement>
    ): Promise<void> {
      e.preventDefault();
      if (!e.currentTarget.checkValidity()) {
        e.stopPropagation();
        changeValidated();
        return;
      }
      changeValidated();
      if (!props.onSubmit) return;
      return await props.onSubmit(e);
    }
    return <Form {...Prop} ref={ref} />;
  }
);
