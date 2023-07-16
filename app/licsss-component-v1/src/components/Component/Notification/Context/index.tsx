import React from "react";
import { createKey } from "../../../../functions";

export interface NotificationProps {
  header?: React.ReactNode;
  body?: React.ReactNode;
  delay?: number | false;
}
export interface NotificationContextProps {
  Notifications: { [s: string]: NotificationProps };
  addNotification: (notification: NotificationProps) => string;
  removeNotification: (key: string) => void;
}
export default React.createContext<NotificationContextProps>({
  Notifications: {},
  addNotification: () => "",
  removeNotification: () => "",
});

export interface UseNotificationProps {
  Notifications: { [s: string]: NotificationProps };
  addNotification: (notification: NotificationProps) => string;
  removeNotification: (key: string) => void;
}
export function useNotification(
  props: NotificationContextProps
): UseNotificationProps {
  const [Notifications, setNotifications] = React.useState<{
    [s: string]: NotificationProps;
  }>(props.Notifications || {});

  function addNotification(notification: NotificationProps): string {
    const key: string = createKey();
    Notifications[key] = notification;
    setNotifications({ ...Notifications });
    return key;
  }
  function removeNotification(key: string): void {
    if (!Notifications[key]) return;
    delete Notifications[key];
    setNotifications({ ...Notifications });
  }

  return {
    Notifications: Notifications,
    addNotification: addNotification,
    removeNotification: removeNotification,
  };
}
