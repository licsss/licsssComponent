import React from "react";
import Bootstrap from "react-bootstrap";
export interface FormControlProps extends Bootstrap.FormControlProps {
    maxLength?: number;
    required?: boolean;
    validMessage?: React.ReactElement | string;
    invalidMessage?: React.ReactElement | string;
    name: string;
}
declare const _default: React.ForwardRefExoticComponent<FormControlProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
export default _default;
