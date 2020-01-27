import React from 'react'
import ReactDom from 'react-dom';
import s from './MyList.module.css';
import ChangeDisplayContainer from '../ChangeDisplay/ChangeDisplayContainer';
import MyListPanelContainer from '../MyListPanel/MyListPanelConataner';


const MyList =(props)=>{

    return(
        <div class={s.my_list}>
        <h2 className={s.title}>My list</h2>
        <ChangeDisplayContainer></ChangeDisplayContainer>
        <MyListPanelContainer></MyListPanelContainer>
        </div>
    )
}
export default MyList