import React from 'react';
import style from './SearchInput.module.css'

interface ISearchInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function SearchInput({ value, onChange }: ISearchInputProps) {
  return (
    <input className={style.input} value={value} onChange={onChange} placeholder='Поиск' type="text" />
  )
}