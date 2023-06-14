import React, { useContext } from "react";
import './navbar.css'
import styles from './navbar.module.css'
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context";
import { MyButton } from "../UI/MyButton/Mybutton";

export function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}><NavLink className={styles.link} to="/about">о сайте</NavLink></li>
        <li className={styles.item}><NavLink className={styles.link} to="/posts">посты</NavLink></li>
      </ul>
      {isAuth
        ? <Link onClick={logout} className={styles.link} to="/login">выйти</Link>
        : <Link className={styles.link} to="/login">войти</Link>
      }
    </nav>
  )
}