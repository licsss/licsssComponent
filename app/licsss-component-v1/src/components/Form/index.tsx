import React from "react";
import Control, { FormControlProps } from "./Control";
import Form, {
  FormNotification,
  FormNotificationProps,
  FormProps,
} from "./Form";
import Context, { FormContextProps, UseFormProps, useForm } from "./Context";
import ControlWrapper, { FormControlWrapperProps } from "./ControlWrapper";
import ElementWrapper, { FormElementWrapperProps } from "./ElementWrapper";
import Select, { FormSelectProps } from "./Select";
import SelectWrapper, { FormSelectWrapperProps } from "./SelectWrapper";

export interface FormsInterface {
  Form: React.ForwardRefExoticComponent<
    FormProps & React.RefAttributes<HTMLFormElement>
  >;
  FormNotification: React.ForwardRefExoticComponent<FormNotificationProps>;
  FormContext: React.Context<FormContextProps>;
  useForm: <T>() => UseFormProps<T>;
  Control: React.ForwardRefExoticComponent<
    FormControlProps &
      React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>
  >;
  ControlWrapper: React.ForwardRefExoticComponent<FormControlWrapperProps>;
  ElementWrapper: React.ForwardRefExoticComponent<FormElementWrapperProps>;
  Select: React.ForwardRefExoticComponent<FormSelectProps>;
  SelectWrapper: React.ForwardRefExoticComponent<FormSelectWrapperProps>;
}
const Forms: FormsInterface = {
  Form: Form,
  FormNotification: FormNotification,
  FormContext: Context,
  useForm: useForm,
  Control: Control,
  ControlWrapper: ControlWrapper,
  ElementWrapper: ElementWrapper,
  Select: Select,
  SelectWrapper: SelectWrapper,
};

export default Forms;
