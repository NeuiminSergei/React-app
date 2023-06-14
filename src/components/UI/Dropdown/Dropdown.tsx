import React, { useState } from "react";
import style from './dropdown.module.css'

interface IDropdownProps {
  button: React.ReactNode
  children: React.ReactNode
}

export function Dropdown({ button, children }: IDropdownProps) {

  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className={style.dropdown}>
      <div className={style.wrapper}>
        <div className={style.btn} onClick={() => setDropdownOpen(!dropdownOpen)}>
          {button}
        </div>
        {dropdownOpen && (
          <div className={style.content} onClick={() => setDropdownOpen(false)}>
            {children}
          </div>
        )}
      </div>
    </div >
  )
}