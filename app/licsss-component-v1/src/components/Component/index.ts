import React from "react";
import Alert, { AlertChildren, AlertChildrenProps, AlertProps } from "./Alert";
import Button, {
  ButtonChildren,
  ButtonChildrenProps,
  ButtonProps,
} from "./Button";
import Icon, { IconProps, SvgName, svgs } from "./Icon";
import Notification, {
  NotiProps,
  NotificationToast,
  NotificationToastProps,
} from "./Notification";
import NotificationContext, {
  NotificationContextProps,
  UseNotificationProps,
  useNotification,
} from "./Notification/Context";
import Toast, {
  ToastContainer,
  ToastContainerProps,
  ToastProps,
} from "./Toast";

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

const Components: ComponentsInterface = {
  Alert: Alert,
  AlertChildren: AlertChildren,
  Button: Button,
  ButtonChildren: ButtonChildren,
  Icon: Icon,
  svgs: svgs,
  Notification: Notification,
  NotificationToast: NotificationToast,
  NotificationContext: NotificationContext,
  useNotification: useNotification,
  Toast: Toast,
  ToastContainer: ToastContainer,
};
export default Components;
