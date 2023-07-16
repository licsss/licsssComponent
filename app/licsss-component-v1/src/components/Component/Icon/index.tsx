import React from "react";

export interface IconProps extends React.PropsWithChildren {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
  name: string;
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
        viewBox={`0 0 ${Props.width} ${Props.height}`}
        {...Props}
      />
    );
  }
);
export const svgs: Record<string, IconProps> = {
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
};
