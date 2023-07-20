import React from "react";
import Control, { FormControlProps } from "./Control";
import Form, {
  FormNotification,
  FormNotificationProps,
  FormProps,
} from "./Form";
import FormContext, {
  FormContextProps,
  UseFormProps,
  useForm,
} from "./Context";
import ControlWrapper, { FormControlWrapperProps } from "./ControlWrapper";
import ElementWrapper, { FormElementWrapperProps } from "./ElementWrapper";
import Select, { FormSelectProps } from "./Select";
import SelectWrapper, { FormSelectWrapperProps } from "./SelectWrapper";
import Feedback, {
  FeedbackContext,
  FeedbackContextInterface,
  FeedbackProps,
  UseFeedback,
  useFeedback,
} from "./Feedback";

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
  Feedback: (props: FeedbackProps) => React.ReactElement;
  FeedbackContext: React.Context<UseFeedback>;
  useFeedback: (props: FeedbackContextInterface) => UseFeedback;
}
const Forms: FormsInterface = {
  Form: Form,
  FormNotification: FormNotification,
  FormContext: FormContext,
  useForm: useForm,
  Control: Control,
  ControlWrapper: ControlWrapper,
  ElementWrapper: ElementWrapper,
  Select: Select,
  SelectWrapper: SelectWrapper,
  Feedback: Feedback,
  FeedbackContext: FeedbackContext,
  useFeedback: useFeedback,
};

export default Forms;
