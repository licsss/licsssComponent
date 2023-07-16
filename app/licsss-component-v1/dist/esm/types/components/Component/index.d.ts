import React from "react";
import { AlertChildrenProps, AlertProps } from "./Alert";
import { ButtonChildrenProps, ButtonProps } from "./Button";
import { IconProps, SvgName } from "./Icon";
import { NotiProps, NotificationToastProps } from "./Notification";
import { NotificationContextProps, UseNotificationProps } from "./Notification/Context";
import { ToastContainerProps, ToastProps } from "./Toast";
export interface ComponentsInterface {
    Alert: React.ForwardRefExoticComponent<AlertProps>;
    AlertChildren: React.ForwardRefExoticComponent<AlertChildrenProps>;
    Button: React.ForwardRefExoticComponent<ButtonProps>;
    ButtonChildren: React.ForwardRefExoticComponent<ButtonChildrenProps>;
    Icon: React.ForwardRefExoticComponent<IconProps>;
    svgs: Record<SvgName, IconProps>;
    Notification: React.ForwardRefExoticComponent<NotiProps>;
    NotificationToast: React.ForwardRefExoticComponent<NotificationToastProps>;
    NotificationContext: React.Context<NotificationContextProps>;
    useNotification: (props: NotificationContextProps) => UseNotificationProps;
    Toast: React.ForwardRefExoticComponent<ToastProps>;
    ToastContainer: React.ForwardRefExoticComponent<ToastContainerProps>;
}
declare const Components: ComponentsInterface;
export default Components;
