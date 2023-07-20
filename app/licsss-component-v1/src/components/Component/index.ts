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
import Pagination, { PaginationProps } from "./Pagination";
import Modal, { ModalProps } from "./Modal";
import ModalHeader, { ModalHeaderProps } from "./Modal/Header";
import ModalBody, { ModalBodyProps } from "./Modal/Body";
import ModalFooter, { ModalFooterProps } from "./Modal/Footer";

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
  Pagination: React.ForwardRefExoticComponent<PaginationProps>;
  Modal: React.ForwardRefExoticComponent<ModalProps>;
  ModalHeader: React.ForwardRefExoticComponent<ModalHeaderProps>;
  ModalBody: React.ForwardRefExoticComponent<ModalBodyProps>;
  ModalFooter: React.ForwardRefExoticComponent<ModalFooterProps>;
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
  Pagination: Pagination,
  Modal: Modal,
  ModalHeader: ModalHeader,
  ModalBody: ModalBody,
  ModalFooter: ModalFooter,
};
export default Components;
