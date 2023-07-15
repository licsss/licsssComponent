import React from "react";
import { Form } from "react-bootstrap";

export interface FormElementWrapperProps extends React.PropsWithChildren {
  label: string;
  description?: string;
  parent?: {};
  required?: boolean;
}
export default React.forwardRef(
  (
    props: FormElementWrapperProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div {...props.parent} ref={ref}>
        <Form.Label>
          {props.label}
          {props.required && <span className="text-danger">＊</span>}
          <Form.Text className={"d-block ps-1"}>{props.description}</Form.Text>
        </Form.Label>
        {props.children}
      </div>
    );
  }
);
