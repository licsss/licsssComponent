import React from "react";
import Toast, { ToastContainer, ToastProps } from "../Toast";
import NotificationContext, {
  NotificationProps,
  UseNotificationProps,
  useNotification,
} from "./Context";

export interface NotiProps {
  Notifications?: { [s: string]: NotificationProps };
}
export default React.forwardRef(
  (
    props: NotiProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement => {
    const NotificationContextValue: UseNotificationProps = useNotification({
      Notifications: props.Notifications || {},
      addNotification: () => "",
      removeNotification: () => "",
    });
    return (
      <NotificationContext.Provider value={NotificationContextValue}>
        <ToastContainer
          ref={ref}
          className="position-fixed me-2 mb-2"
          position="bottom-end"
        >
          {Object.keys(NotificationContextValue.Notifications).map(
            (notificationkey: string) => (
              <NotificationToast
                key={notificationkey}
                Notification={
                  NotificationContextValue.Notifications[notificationkey]
                }
                notificationKey={notificationkey}
                delay={
                  NotificationContextValue.Notifications[notificationkey].delay
                }
                NotificationContextValue={NotificationContextValue}
              />
            )
          )}
        </ToastContainer>
      </NotificationContext.Provider>
    );
  }
);

export interface NotificationToastProps {
  Notification: NotificationProps;
  notificationKey: string;
  NotificationContextValue?: UseNotificationProps;
  delay?: number | false;
}
export const NotificationToast = React.forwardRef(
  (
    {
      delay = 5000,
      NotificationContextValue,
      ...props
    }: NotificationToastProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement => {
    const [Show, setShow] = React.useState<boolean>(true);
    let ToastProps: ToastProps = {};
    ToastProps["header"] = props.Notification.header;
    ToastProps["children"] = props.Notification.body;

    React.useEffect(() => {
      if (delay === false) return;
      setTimeout(close, delay);
    }, [delay]);
    function close(): void {
      setShow(false);
      setTimeout(() => {
        NotificationContextValue?.removeNotification(props.notificationKey);
      }, 1500);
    }
    return <Toast show={Show} {...ToastProps} onClose={close} ref={ref} />;
  }
);
