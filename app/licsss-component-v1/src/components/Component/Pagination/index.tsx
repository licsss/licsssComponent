import React from "react";
import Bootstrap, { Pagination } from "react-bootstrap";
import { ResponseMetaType, getQuery } from "../../../functions";

export interface PaginationProps extends Bootstrap.PaginationProps {
  meta: ResponseMetaType;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
export default React.forwardRef(
  (
    { meta, setPage, className, ...props }: PaginationProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): React.ReactElement => {
    const [TopPage, setTopPage] = React.useState<boolean>(true);
    const [LastPage, setLastPage] = React.useState<boolean>(true);

    React.useEffect(() => {
      setTopPage(meta.currentPage === 1);
      setLastPage(meta.currentPage === meta.lastPage);
    }, [meta]);

    function changePage(e: React.MouseEvent<HTMLAnchorElement>): void {
      e.preventDefault();
      setPage(Number(getQuery("page", e.currentTarget.pathname)));
    }
    return (
      <div className="w-100" ref={ref}>
        <Pagination
          className={"mx-auto mt-3 position-static " + className}
          {...props}
        >
          <Pagination.First
            href="?page=1"
            onClick={changePage}
            disabled={TopPage}
          />
          <Pagination.Prev
            href={TopPage ? `?page=1` : `?page=${meta.currentPage - 1}`}
            onClick={changePage}
            disabled={TopPage}
          />
          <Pagination.Item disabled>{meta.currentPage}</Pagination.Item>
          <Pagination.Next
            href={`?page=${meta.currentPage + 1}`}
            onClick={changePage}
            disabled={LastPage}
          />
          <Pagination.Last
            href={
              LastPage ? `?page=${meta.lastPage}` : `?page=${meta.lastPage}`
            }
            onClick={changePage}
            disabled={LastPage}
          />
        </Pagination>
      </div>
    );
  }
);
