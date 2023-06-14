import React from "react";
import style from './MyInput.module.css'

interface IMyInputProps {
  type: string
  placeholder?: string
}

export function MyInput({ type, placeholder }: IMyInputProps) {
  return (
    <input className={style.input} type={type} placeholder={placeholder} />
  )
}