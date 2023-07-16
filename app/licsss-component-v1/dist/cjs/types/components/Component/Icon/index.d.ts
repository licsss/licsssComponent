import React from "react";
export interface IconProps extends React.PropsWithChildren {
    width?: number;
    height?: number;
    className?: string;
    fill?: string;
    name: SvgName;
}
declare const _default: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
export default _default;
export type SvgName = "normal" | "add" | "edit" | "trash" | "info" | "check" | "exclamation";
export declare const svgs: Record<SvgName, IconProps>;
