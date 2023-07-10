import React from "react";
import Control, { FormControlProps } from "./Control";
import Form, { FormProps } from "./Form";

export interface FormsInterface {
  Form: React.ForwardRefExoticComponent<
    FormProps & React.RefAttributes<HTMLFormElement>
  >;
  Control: React.ForwardRefExoticComponent<
    FormControlProps & React.RefAttributes<HTMLInputElement>
  >;
}
const Forms: FormsInterface = {
  Form: Form,
  Control: Control,
};

export default Forms;
