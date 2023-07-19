import React from "react";
import Bootstrap, { FormControl } from "react-bootstrap";
import Feedback from "../Feedback";

export interface FormControlProps extends Bootstrap.FormControlProps {
  maxLength?: number;
  required?: boolean;
  validMessage?: React.ReactElement | string;
  invalidMessage?: React.ReactElement | string;
  name: string;
}
export default React.forwardRef(
  (
    props: FormControlProps,
    ref: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
  ): JSX.Element => {
    const { validMessage, invalidMessage, ...Prop }: FormControlProps = {
      ...props,
      onChange: onChange,
    };
    if (!Prop.maxLength) Prop.maxLength = undefined;

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
      <>
        <FormControl {...Prop} ref={ref} />
        <Feedback
          validMessage={validMessage}
          invalidMessage={invalidMessage}
          name={Prop.name}
        />
        <div
          className={"form-control-info " + (Prop.maxLength ? "" : "d-none")}
        >
          {`${Cnt}/${Prop.maxLength}文字`}
        </div>
      </>
    );
  }
);
