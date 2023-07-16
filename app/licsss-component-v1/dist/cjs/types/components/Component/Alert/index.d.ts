import React from "react";
import Bootstrap from "react-bootstrap";
import { SvgName } from "../Icon";
export type AlertProps = Bootstrap.AlertProps & AlertChildrenProps & {
    Heading?: React.ReactElement;
};
declare const _default: React.ForwardRefExoticComponent<Bootstrap.AlertProps & AlertChildrenProps & {
    Heading?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export default _default;
export interface AlertChildrenProps extends React.PropsWithChildren {
    name?: SvgName;
    width?: number;
    heigth?: number;
}
export declare const AlertChildren: React.ForwardRefExoticComponent<AlertChildrenProps & React.RefAttributes<HTMLTableElement>>;
