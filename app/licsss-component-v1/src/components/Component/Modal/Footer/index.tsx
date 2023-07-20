import React from "react";
import { ModalFooter } from "react-bootstrap";

export interface ModalFooterProps extends React.PropsWithChildren {
  className?: string;
}
export default React.forwardRef(
  (
    props: ModalFooterProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement => {
    return <ModalFooter {...props} ref={ref} />;
  }
);
