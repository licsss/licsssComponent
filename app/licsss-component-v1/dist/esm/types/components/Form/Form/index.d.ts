import React from "react";
import Bootstrap from "react-bootstrap";
import { UseFormProps } from "../Context";
import { ResponseType } from "../../../functions";
export interface FormProps extends Bootstrap.FormProps {
    successMessage?: React.ReactElement | false;
    Response?: ResponseType;
}
declare const _default: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
export default _default;
export interface FormNotificationProps {
    Response: UseFormProps;
    successMessage?: React.ReactElement | false;
}
export declare const FormNotification: React.ForwardRefExoticComponent<FormNotificationProps & React.RefAttributes<HTMLDivElement>>;
