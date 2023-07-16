import React from "react";
import Bootstrap, { Button, Col, Row } from "react-bootstrap";
import Icon, { SvgName } from "../Icon";

export interface ButtonChildrenProps extends React.PropsWithChildren {
  mode?: SvgName;
}
export type ButtonProps = Bootstrap.ButtonProps & ButtonChildrenProps & {};
export default React.forwardRef(
  (
    props: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ): JSX.Element => {
    const { mode, children, className, ...ButtonProps }: ButtonProps = props;
    return (
      <Button {...ButtonProps} className={`mt-2 ${className || ""}`} ref={ref}>
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
    let Children: React.ReactNode = props.children;
    switch (props.mode) {
      case "add":
        if (!Children) Children = "登録";
        break;
      case "edit":
        if (!Children) Children = "編集";
        break;
      case "trash":
        if (!Children) Children = "削除";
        break;
      case "normal":
      default:
        return <div ref={ref}>{Children}</div>;
    }
    return (
      <Row className="px-2">
        <Col className="px-0">{Children}</Col>
        <Col xs="auto" className="px-0 ps-1">
          <Icon name={props.mode} />
        </Col>
      </Row>
    );
  }
);
