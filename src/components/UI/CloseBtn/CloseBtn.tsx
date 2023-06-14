import React from "react";
import style from './closeBtn.module.css'

interface ICloseBtnProps {
  setVisible: (visible: boolean) => void
}

export function CloseBtn({ setVisible }: ICloseBtnProps) {
  return (
    <button className={style.close_btn} onClick={() => setVisible(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" /></svg>
    </button>
  )
}