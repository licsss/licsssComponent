import React from "react";

export interface IconProps extends React.PropsWithChildren {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
  name: SvgName;
}
export default React.forwardRef(
  (
    props: IconProps,
    ref: React.ForwardedRef<SVGSVGElement>
  ): React.ReactNode => {
    let { name, ...Props }: IconProps = {
      ...{},
      ...props,
    };
    if (name === "normal" || !name) return props.children;

    if (svgs[name]) Props = { ...props, ...svgs[name] };
    if (!Props["width"]) Props["width"] = 16;
    if (!Props["height"]) Props["height"] = 16;
    Props["className"] = `pb-1 ${props["className"] || ""} ${
      Props["className"] || ""
    }`;

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox={`0 0 16 16`}
        {...Props}
      />
    );
  }
);
export type SvgName =
  | "normal"
  | "add"
  | "edit"
  | "trash"
  | "info"
  | "check"
  | "exclamation";
export const svgs: Record<SvgName, IconProps> = {
  normal: { name: "normal" },
  add: {
    name: "add",
    className: "bi bi-plus-circle",
    children: (
      <>
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </>
    ),
  },
  edit: {
    name: "edit",
    className: "bi bi-pencil-fill",
    children: (
      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
    ),
  },
  trash: {
    name: "trash",
    className: "bi bi-trash-fill",
    children: (
      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
    ),
  },
  info: {
    name: "info",
    className: "bi bi-info-circle-fill",
    children: (
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    ),
  },
  check: {
    name: "check",
    className: "bi bi-check-circle-fill",
    children: (
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    ),
  },
  exclamation: {
    name: "exclamation",
    className: "bi bi-exclamation-triangle-fill",
    children: (
      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    ),
  },
};
