import React from "react";
import style from "./postFilter.module.css"
import { MyButton } from "../UI/MyButton/Mybutton";
import { Dropdown } from "../UI/Dropdown/Dropdown";
import { SortList } from "../SortList.tsx/SortList";
import { SearchInput } from "../UI/SearchInput/SearchInput";

interface IPostFilterProps {
  sort: (sort: string) => void
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function PostFilter({ sort, value, onChange }: IPostFilterProps) {
  return (
    <div className={style.wrapper}>
      <Dropdown button={<MyButton>сортировка</MyButton>} children={<SortList sort={sort} />}></Dropdown>
      <SearchInput value={value} onChange={onChange} />
    </div>
  )
}