import React from "react";
import style from './pageBtn.module.css'

interface IPageBtnProps {
  children: React.ReactNode
  page: number
  onClick?: (e: React.MouseEvent) => void
}

export function PageBtn({ children, page, onClick }: IPageBtnProps) {
  const rootClasses = [style.page_btn]

  if (page === children) {
    rootClasses.push(style.active)
  }

  return (
    <button onClick={onClick} className={rootClasses.join(' ')}>
      {children}
    </button>
  )
}