import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import s from './HeaderApp.module.css';

const HeaderApp = () => (
  <header className={s.header_page}>
    <img src={logo} className={s.header_logo} />
    <ul className={s.header_list}>
      <NavLink to="/search"><li className={s.header_list_item}>Search</li></NavLink>
      <NavLink to="/my-list"><li className={s.header_list_item}>My list</li></NavLink>
    </ul>
  </header>
);
export default HeaderApp;
