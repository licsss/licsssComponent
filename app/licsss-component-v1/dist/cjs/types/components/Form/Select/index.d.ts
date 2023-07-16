import React from "react";
import Bootstrap from "react-bootstrap";
export interface FormSelectProps extends Bootstrap.FormSelectProps {
    required?: boolean;
    validMessage?: React.ReactNode;
    invalidMessage?: React.ReactNode;
    options?: {
        value: string;
        label: string;
    }[];
}
declare const _default: React.ForwardRefExoticComponent<FormSelectProps & React.RefAttributes<HTMLSelectElement>>;
export default _default;
