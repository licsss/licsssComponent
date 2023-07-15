import React from "react";
import Bootstrap, { FormControl, FormSelect } from "react-bootstrap";

export interface FormSelectProps extends Bootstrap.FormSelectProps {
  required?: boolean;
  validMessage?: React.ReactNode;
  invalidMessage?: React.ReactNode;
  options?: { value: string; label: string }[];
}
export default React.forwardRef(
  (
    props: FormSelectProps,
    ref: React.ForwardedRef<HTMLSelectElement>
  ): JSX.Element => {
    const {
      validMessage,
      invalidMessage,
      children,
      options,
      ...SelectProp
    }: FormSelectProps = {
      ...props,
      onChange: onChange,
    };

    function onChange(e: React.ChangeEvent<HTMLSelectElement>): void {
      if (props.onChange) props.onChange(e);
    }
    return (
      <>
        <FormSelect {...SelectProp} ref={ref}>
          <option
            label="選択してください"
            className={SelectProp.required ? "d-none" : ""}
          />
          {options?.map((option) => <option key={option.value} {...option} />)}
          {children}
        </FormSelect>
        <FormControl.Feedback>{validMessage}</FormControl.Feedback>
        <FormControl.Feedback type="invalid">
          {invalidMessage}
        </FormControl.Feedback>
      </>
    );
  }
);
