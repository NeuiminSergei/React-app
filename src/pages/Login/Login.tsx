import React, { useContext } from "react";
import { MyInput } from "../../components/UI/MyInput/MyInput";
import { MyButton } from "../../components/UI/MyButton/Mybutton";
import style from './login.module.css'
import { AuthContext } from "../../context";

export function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const login = (event: React.FormEvent) => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Авторизация</h2>
      <form className={style.form} onSubmit={login}>
        <MyInput type="text" placeholder="логин" />
        <MyInput type="password" placeholder="пароль" />
        <MyButton>войти</MyButton>
      </form>
    </div>
  )
}