import React from "react";
import style from './myButton.module.css'

interface IMyButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
}

export function MyButton({ children, onClick }: IMyButtonProps) {
  return (
    <button onClick={onClick} className={style.button}>
      {children}
    </button>
  )
}