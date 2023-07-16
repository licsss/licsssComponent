import React from "react";
export interface NotificationProps {
    header?: React.ReactNode;
    body?: React.ReactNode;
    delay?: number | false;
}
export interface NotificationContextProps {
    Notifications: {
        [s: string]: NotificationProps;
    };
    addNotification: (notification: NotificationProps) => string;
    removeNotification: (key: string) => void;
}
declare const _default: React.Context<NotificationContextProps>;
export default _default;
export interface UseNotificationProps {
    Notifications: {
        [s: string]: NotificationProps;
    };
    addNotification: (notification: NotificationProps) => string;
    removeNotification: (key: string) => void;
}
export declare function useNotification(props: NotificationContextProps): UseNotificationProps;
