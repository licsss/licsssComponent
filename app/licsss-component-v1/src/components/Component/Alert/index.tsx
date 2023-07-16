import React from "react";
import Bootstrap, { Alert, Col, Row } from "react-bootstrap";
import Icon, { SvgName } from "../Icon";

export type AlertProps = Bootstrap.AlertProps &
  AlertChildrenProps & {
    Heading?: React.ReactElement;
  };
export default React.forwardRef(
  (
    {
      name,
      width,
      heigth,
      children,
      className = "",
      variant,
      Heading,
      ...props
    }: AlertProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement => {
    function getVariant(): string {
      if (variant) return variant;
      switch (name) {
        case "info":
          return "info";
        case "check":
          return "warning";
        case "exclamation":
          return "danger";
      }
      return "primary";
    }
    return (
      <Alert
        ref={ref}
        variant={getVariant()}
        {...props}
        className={`position-static px-2 py-3 ${className}`}
      >
        <AlertChildren name={name} width={width} heigth={heigth}>
          {Heading && (
            <>
              <Alert.Heading>{Heading}</Alert.Heading>
              <hr />
            </>
          )}
          {children}
        </AlertChildren>
      </Alert>
    );
  }
);

export interface AlertChildrenProps extends React.PropsWithChildren {
  name?: SvgName;
  width?: number;
  heigth?: number;
}
export const AlertChildren = React.forwardRef(
  (
    { width = 32, heigth = 32, ...props }: AlertChildrenProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement => {
    if (!props.name || props.name === "normal") return <div ref={ref} />;
    return (
      <div ref={ref}>
        <Row>
          <Col xs="auto" className="pe-1">
            <Icon name={props.name} width={width} height={heigth} />
          </Col>
          <Col xs>{props.children}</Col>
        </Row>
      </div>
    );
  }
);
