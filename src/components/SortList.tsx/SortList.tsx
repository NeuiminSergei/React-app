import React from "react";
import style from './sortList.module.css'

interface ISortListProps {
  sort: (sort: string) => void
}

export function SortList({ sort }: ISortListProps) {

  return (
    <ul className={style.list}>
      <li onClick={() => sort('title')} className={style.item}>По названию</li>
      <li onClick={() => sort('body')} className={style.item}>По описанию</li>
    </ul>
  )
}