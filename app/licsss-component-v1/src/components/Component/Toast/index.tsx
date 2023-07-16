import React from "react";
import Bootstrap, { Toast, ToastContainer as Container } from "react-bootstrap";

export interface ToastProps extends Bootstrap.ToastProps {
  header?: React.ReactNode;
}
export default React.forwardRef(
  (
    { header, children, animation = true, ...props }: ToastProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement => {
    return (
      <Toast {...props} animation={animation} ref={ref}>
        {header && (
          <Toast.Header>
            <div className="me-auto">{header}</div>
          </Toast.Header>
        )}
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    );
  }
);

export interface ToastContainerProps extends Bootstrap.ToastContainerProps {}
export const ToastContainer = React.forwardRef(
  (
    props: ToastContainerProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement => {
    return <Container {...props} ref={ref} />;
  }
);
