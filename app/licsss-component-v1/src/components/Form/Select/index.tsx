import React from "react";
import Bootstrap, { FormSelect } from "react-bootstrap";
import Feedback, { FeedbackContext, useFeedback } from "../Feedback";

export interface FormSelectProps extends Bootstrap.FormSelectProps {
  required?: boolean;
  validMessage?: React.ReactElement | string;
  invalidMessage?: React.ReactElement | string;
  name: string;
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

    const FeedbackValue = useFeedback({
      name: SelectProp.name,
      invalidMessages: false,
    });
    function onChange(e: React.ChangeEvent<HTMLSelectElement>): void {
      if (props.onChange) props.onChange(e);
    }
    return (
      <FeedbackContext.Provider value={FeedbackValue}>
        <FormSelect
          {...SelectProp}
          ref={ref}
          className={`
            ${SelectProp.className || ""}${
              FeedbackValue.invalidMessages !== false ? " border-danger" : ""
            }
          `}
        >
          <option
            label="選択してください"
            className={SelectProp.required ? "d-none" : ""}
          />
          {options?.map((option) => <option key={option.value} {...option} />)}
          {children}
        </FormSelect>
        <Feedback
          name={SelectProp.name}
          validMessage={validMessage}
          invalidMessage={invalidMessage}
        />
      </FeedbackContext.Provider>
    );
  }
);
