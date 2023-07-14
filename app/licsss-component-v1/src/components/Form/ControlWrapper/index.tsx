import React from "react";
import Bootstrap, { Form } from "react-bootstrap";
import Control, { FormControlProps } from "../Control";

export interface FormControlWrapperProps extends FormControlProps {
  label: string;
  parent?: {};
}
export default React.forwardRef(
  (
    props: FormControlWrapperProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const Prop: Bootstrap.FormControlProps = {
      placeholder: props.label,
      ...props,
      onChange: onChange,
    };

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
      <div {...props.parent}>
        <Form.Label>
          {props.label}
          {props.required && <span className="text-danger">＊</span>}
        </Form.Label>
        <Control ref={ref} {...Prop} />
        <Form.Control.Feedback>valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">invalid</Form.Control.Feedback>
        <div
          className={"form-control-info " + (props.maxLength ? "" : "d-none")}
        >
          {Cnt}
        </div>
      </div>
    );
  }
);
