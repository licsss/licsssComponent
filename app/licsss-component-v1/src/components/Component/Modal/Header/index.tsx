import React from "react";
import Bootstrap, { ModalHeader } from "react-bootstrap";

export interface ModalHeaderProps extends Bootstrap.ModalHeaderProps {}
export default React.forwardRef(
  (
    { closeButton = true, ...props }: ModalHeaderProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement => {
    return <ModalHeader closeButton={closeButton} {...props} ref={ref} />;
  }
);
