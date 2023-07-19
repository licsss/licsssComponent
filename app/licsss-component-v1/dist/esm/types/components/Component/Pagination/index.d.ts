import React from "react";
import Bootstrap from "react-bootstrap";
import { ResponseMetaType } from "../../../functions";
export interface PaginationProps extends Bootstrap.PaginationProps {
    meta: ResponseMetaType;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}
declare const _default: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
