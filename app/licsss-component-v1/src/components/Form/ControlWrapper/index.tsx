import React from "react";
import Bootstrap, { Form } from "react-bootstrap";
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
          <Form.Text className={"d-block ps-1"}>{props.description}</Form.Text>
        </Form.Label>
        <Control ref={ref} {...Prop} />
        <Form.Control.Feedback>{props.validMessage}</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {props.invalidMessage}
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
