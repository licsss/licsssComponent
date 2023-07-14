import React from "react";
import Bootstrap, { FormControl } from "react-bootstrap";

export interface FormControlProps extends Bootstrap.FormControlProps {
  maxLength?: number;
  required?: boolean;
}
export default React.forwardRef(
  (
    props: FormControlProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return <FormControl {...props} ref={ref} />;
  }
);
