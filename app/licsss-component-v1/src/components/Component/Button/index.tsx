import React from "react";
import Bootstrap, { Button, Col, Row } from "react-bootstrap";

export interface ButtonChildrenProps extends React.PropsWithChildren {
  mode?: "normal" | "add" | "edit" | "remove";
}
export type ButtonProps = Bootstrap.ButtonProps & ButtonChildrenProps & {};
export default React.forwardRef(
  (
    props: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ): JSX.Element => {
    const { mode, children, ...ButtonProps }: ButtonProps = props;
    return (
      <Button {...ButtonProps} ref={ref}>
        <ButtonChildren mode={props.mode}>{children}</ButtonChildren>
      </Button>
    );
  }
);

export const ButtonChildren = React.forwardRef(
  (
    props: ButtonChildrenProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactNode => {
    let Icon: React.ReactNode = undefined;
    switch (props.mode) {
      case "add":
        Icon = "";
        break;
      case "edit":
        Icon = "";
        break;
      case "remove":
        Icon = "";
        break;
      case "normal":
      default:
        return <div ref={ref}>{props.children}</div>;
    }
    return (
      <Row className="px-2">
        <Col className="px-0">{props.children}</Col>
        <Col xs="auto" className="px-0">
          {Icon}
        </Col>
      </Row>
    );
  }
);
