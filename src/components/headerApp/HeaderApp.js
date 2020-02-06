import React from 'react';
import ReactDom from 'react-dom';
import logo from '../../img/logo.png';
import s from './HeaderApp.module.css';
import { NavLink } from 'react-router-dom';
let HeaderApp=(props)=>{
    return(
        <header className={s.header_page}>
            <img src={logo} class={s.header_logo} alt='logo'></img>
            <ul className={s.header_list}>
            <li data-route='search' className={s.header_list_item}><NavLink to='/search' >Search</NavLink></li>
            <li data-route='my-list' className={s.header_list_item}><NavLink to='/my-list' >My list</NavLink></li>
            </ul>
        </header>
    )
}
export default HeaderApp;