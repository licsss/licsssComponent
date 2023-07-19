import React from "react";
import Bootstrap from "react-bootstrap";
import { ModalHeaderProps } from "./Header";
import { ModalFooterProps } from "./Footer";
import { ModalBodyProps } from "./Body";
export interface ModalProps extends Bootstrap.ModalProps {
    Header?: ModalHeaderProps;
    children?: React.ReactNode;
    Body?: ModalBodyProps;
    Footer?: ModalFooterProps;
}
declare const _default: React.ForwardRefExoticComponent<ModalProps>;
export default _default;
