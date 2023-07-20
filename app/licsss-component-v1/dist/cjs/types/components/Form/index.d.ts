import React from "react";
import { FormControlProps } from "./Control";
import { FormNotificationProps, FormProps } from "./Form";
import { FormContextProps, UseFormProps } from "./Context";
import { FormControlWrapperProps } from "./ControlWrapper";
import { FormElementWrapperProps } from "./ElementWrapper";
import { FormSelectProps } from "./Select";
import { FormSelectWrapperProps } from "./SelectWrapper";
import { FeedbackContextInterface, FeedbackProps, UseFeedback } from "./Feedback";
export interface FormsInterface {
    Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
    FormNotification: React.ForwardRefExoticComponent<FormNotificationProps>;
    FormContext: React.Context<FormContextProps>;
    useForm: <T>() => UseFormProps<T>;
    Control: React.ForwardRefExoticComponent<FormControlProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
    ControlWrapper: React.ForwardRefExoticComponent<FormControlWrapperProps>;
    ElementWrapper: React.ForwardRefExoticComponent<FormElementWrapperProps>;
    Select: React.ForwardRefExoticComponent<FormSelectProps>;
    SelectWrapper: React.ForwardRefExoticComponent<FormSelectWrapperProps>;
    Feedback: (props: FeedbackProps) => React.ReactElement;
    FeedbackContext: React.Context<UseFeedback>;
    useFeedback: (props: FeedbackContextInterface) => UseFeedback;
}
declare const Forms: FormsInterface;
export default Forms;
