import React, { HTMLAttributes } from "react";
export interface FormElementWrapperProps extends React.PropsWithChildren {
    label: string;
    description?: string;
    parent?: HTMLAttributes<HTMLDivElement>;
    required?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<FormElementWrapperProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
