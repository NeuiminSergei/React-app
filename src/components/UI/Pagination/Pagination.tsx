import React from "react";
import { usePagination } from "../../../hooks/usePagination";
import { PageBtn } from "../PageBtn/PageBtn";

interface IPaginationProps {
  totalPages: number
  page: number
  changePage: (p: number) => void
}

export function Pagination({ totalPages, page, changePage }: IPaginationProps) {
  const pagesArr = usePagination(totalPages)
  return (
    <div>
      {pagesArr.map(p =>
        <PageBtn onClick={() => changePage(p)} page={page} key={p}>{p}</PageBtn>)}
    </div>
  )
}