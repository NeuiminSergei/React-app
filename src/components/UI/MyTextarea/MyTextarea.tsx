import React from "react";
import style from './myTextarea.module.css'

interface IMyTextareaProps {
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export function MyTextarea({ value, placeholder, onChange }: IMyTextareaProps) {
  return (
    <textarea className={style.textarea} value={value} onChange={onChange} placeholder={placeholder}></textarea>
  )
}