import React from "react";
import Bootstrap, { FormControl } from "react-bootstrap";

export interface FormControlProps extends Bootstrap.FormControlProps {
  maxLength?: number;
  required?: boolean;
  validMessage?: React.ReactNode;
  invalidMessage?: React.ReactNode;
}
export default React.forwardRef(
  (
    props: FormControlProps,
    ref: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
  ): JSX.Element => {
    const { validMessage, invalidMessage, ...Prop } = {
      ...props,
      onChange: onChange,
    };
    if (!Prop.maxLength) Prop.maxLength = undefined;

    const [Cnt, setCnt] = React.useState<number>(
      String(
        props.value ? props.value : props.defaultValue ? props.defaultValue : ""
      ).length
    );

    function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
      setCnt(String(e.currentTarget.value).length);
      if (props.onChange) props.onChange(e);
    }
    return (
      <>
        <FormControl {...Prop} ref={ref} />
        <FormControl.Feedback>{validMessage}</FormControl.Feedback>
        <FormControl.Feedback type="invalid">
          {invalidMessage}
        </FormControl.Feedback>
        <div
          className={"form-control-info " + (Prop.maxLength ? "" : "d-none")}
        >
          {`${Cnt}/${Prop.maxLength}文字`}
        </div>
      </>
    );
  }
);
