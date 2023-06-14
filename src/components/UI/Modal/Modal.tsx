import React from "react";
import style from './modal.module.css'
import { CloseBtn } from "../CloseBtn/CloseBtn";

interface IModalProps {
  children: React.ReactNode
  visible: boolean
  setVisible: (visible: boolean) => void
}

export function Modal({ children, visible, setVisible }: IModalProps) {

  const rootClasses = [style.modal_wrapper]

  if (visible) {
    rootClasses.push(style.modal_active)
  }

  return (
    <div className={rootClasses.join(' ')}>
      <div className={style.modal}>
        <CloseBtn setVisible={setVisible} />
        {children}
      </div>
    </div>
  )
}