import React from 'react';
import ReactDom from 'react-dom';
import logo from '../../img/logo.png';
import s from './HeaderApp.module.css';
import { NavLink } from 'react-router-dom';
let HeaderApp=(props)=>{
    return(
        <header className={s.header_page}>
            <img src={logo} class={s.header_logo}></img>
            <ul className={s.header_list}>
            <NavLink to='/search'><li className={s.header_list_item}>Search</li></NavLink>
            <NavLink to='/my-list'><li className={s.header_list_item}>My list</li></NavLink>
            </ul>
        </header>
    )
}
export default HeaderApp;