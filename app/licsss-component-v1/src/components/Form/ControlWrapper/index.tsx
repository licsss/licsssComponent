import React from "react";
import Control, { FormControlProps } from "../Control";
import ElementWrapper, { FormElementWrapperProps } from "../ElementWrapper";

export type FormControlWrapperProps = FormElementWrapperProps &
  FormControlProps & {};
export default React.forwardRef(
  (
    props: FormControlWrapperProps,
    ref: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
  ): JSX.Element => {
    const {
      label,
      description,
      parent,
      ...ControlProps
    }: FormControlWrapperProps = props;
    if (!ControlProps.placeholder) ControlProps.placeholder = label;
    return (
      <ElementWrapper
        label={label}
        description={description}
        parent={parent}
        required={props.required}
      >
        <Control {...ControlProps} ref={ref} />
      </ElementWrapper>
    );
  }
);
