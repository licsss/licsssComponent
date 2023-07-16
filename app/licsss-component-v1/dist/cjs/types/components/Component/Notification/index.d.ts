import React from "react";
import { NotificationProps, UseNotificationProps } from "./Context";
export interface NotiProps {
    Notifications?: {
        [s: string]: NotificationProps;
    };
}
declare const _default: React.ForwardRefExoticComponent<NotiProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
export interface NotificationToastProps {
    Notification: NotificationProps;
    notificationKey: string;
    NotificationContextValue?: UseNotificationProps;
    delay?: number | false;
}
export declare const NotificationToast: React.ForwardRefExoticComponent<NotificationToastProps & React.RefAttributes<HTMLDivElement>>;
