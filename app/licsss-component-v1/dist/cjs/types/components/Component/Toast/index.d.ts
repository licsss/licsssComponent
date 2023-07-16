import React from "react";
import Bootstrap from "react-bootstrap";
export interface ToastProps extends Bootstrap.ToastProps {
    header?: React.ReactNode;
}
declare const _default: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
export interface ToastContainerProps extends Bootstrap.ToastContainerProps {
}
export declare const ToastContainer: React.ForwardRefExoticComponent<ToastContainerProps & React.RefAttributes<HTMLDivElement>>;
