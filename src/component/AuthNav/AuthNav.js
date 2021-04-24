import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={style.link}
        activeClassName={style.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={style.link}
        activeClassName={style.activeLink}
      >
        Логин
      </NavLink>
    </div>
  );
}
