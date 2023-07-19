import React from "react";
import { ModalBody } from "react-bootstrap";

export interface ModalBodyProps extends React.PropsWithChildren {
  className?: string;
}
export default React.forwardRef(
  (
    { ...props }: ModalBodyProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement => {
    return <ModalBody {...props} ref={ref} />;
  }
);
