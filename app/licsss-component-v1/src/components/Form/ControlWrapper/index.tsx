import React from "react";
import { Form } from "react-bootstrap";
import Control, { FormControlProps } from "../Control";

export interface FormControlWrapperProps extends FormControlProps {
  label: string;
  description?: string;
  parent?: {};
  validMessage?: React.ReactNode;
  invalidMessage?: React.ReactNode;
}
export default React.forwardRef(
  (
    props: FormControlWrapperProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const {
      validMessage,
      invalidMessage,
      label,
      description,
      parent,
      ...Prop
    }: FormControlWrapperProps = {
      placeholder: props.label,
      ...props,
      onChange: onChange,
    };
    if (!Prop.placeholder) Prop.placeholder = props.label;

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
      <div {...parent}>
        <Form.Label>
          {label}
          {props.required && <span className="text-danger">＊</span>}
          <Form.Text className={"d-block ps-1"}>{description}</Form.Text>
        </Form.Label>
        <Control ref={ref} {...Prop} />
        <Form.Control.Feedback>{validMessage}</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {invalidMessage}
        </Form.Control.Feedback>
        <div
          className={"form-control-info " + (props.maxLength ? "" : "d-none")}
        >
          {`${Cnt}/${props.maxLength}文字`}
        </div>
      </div>
    );
  }
);
