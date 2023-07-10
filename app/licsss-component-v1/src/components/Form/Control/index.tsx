import React from "react";
import Bootstrap from "react-bootstrap";

export interface FormControlProps extends Bootstrap.FormControlProps {}
export default React.forwardRef(
  (
    props: FormControlProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return <Bootstrap.FormControl {...props} ref={ref} />;
  }
);
