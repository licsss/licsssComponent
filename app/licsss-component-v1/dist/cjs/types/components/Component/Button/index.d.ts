import React from "react";
import Bootstrap from "react-bootstrap";
import { SvgName } from "../Icon";
export interface ButtonChildrenProps extends React.PropsWithChildren {
    mode?: SvgName;
}
export type ButtonProps = Bootstrap.ButtonProps & ButtonChildrenProps & {};
declare const _default: React.ForwardRefExoticComponent<Bootstrap.ButtonProps & ButtonChildrenProps & React.RefAttributes<HTMLButtonElement>>;
export default _default;
export declare const ButtonChildren: React.ForwardRefExoticComponent<ButtonChildrenProps & React.RefAttributes<HTMLDivElement>>;
