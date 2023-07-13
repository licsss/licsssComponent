import React from "react";
import Bootstrap, { FormControl } from "react-bootstrap";
import "./../../styles/bootstrap.css";

export interface FormControlProps extends Bootstrap.FormControlProps {}
export default React.forwardRef(
  (
    props: FormControlProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return <FormControl {...props} ref={ref} />;
  }
);
