import React from "react";
import ElementWrapper, { FormElementWrapperProps } from "../ElementWrapper";
import Select, { FormSelectProps } from "../Select";

export type FormSelectWrapperProps = FormElementWrapperProps &
  FormSelectProps & {};
export default React.forwardRef(
  (
    props: FormSelectWrapperProps,
    ref: React.ForwardedRef<HTMLSelectElement>
  ): JSX.Element => {
    const {
      label,
      description,
      parent,
      ...SelectProps
    }: FormSelectWrapperProps = props;
    return (
      <ElementWrapper
        label={label}
        description={description}
        parent={parent}
        required={props.required}
      >
        <Select {...SelectProps} ref={ref} />
      </ElementWrapper>
    );
  }
);
