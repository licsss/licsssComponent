import React from "react";
import Bootstrap, { Modal } from "react-bootstrap";
import ModalHeader, { ModalHeaderProps } from "./Header";
import ModalFooter, { ModalFooterProps } from "./Footer";
import ModalBody, { ModalBodyProps } from "./Body";

export interface ModalProps extends Bootstrap.ModalProps {
  Header?: ModalHeaderProps;
  children?: React.ReactNode;
  Body?: ModalBodyProps;
  Footer?: ModalFooterProps;
}
const _default: React.ForwardRefExoticComponent<ModalProps> = React.forwardRef(
  (
    {
      animation = true,
      scrollable = true,
      centered = true,
      Header,
      Body,
      Footer,
      children,
      ...props
    }: ModalProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement => {
    return (
      <Modal
        animation={animation}
        scrollable={scrollable}
        centered={centered}
        {...props}
        ref={ref}
      >
        {Header !== undefined && <ModalHeader {...Header} />}
        <ModalBody>{children}</ModalBody>
        {Body !== undefined && <ModalBody {...Body} />}
        {Footer !== undefined && <ModalFooter {...Footer} />}
      </Modal>
    );
  }
);
export default _default;
