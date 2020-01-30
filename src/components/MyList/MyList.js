import React from 'react';
import s from './MyList.module.css';
import ChangeDisplayContainer from '../ChangeDisplay/ChangeDisplayContainer';
import MyListPanelContainer from '../MyListPanel/MyListPanelConataner';


const MyList = () => (
  <div className={s.my_list}>
    <h2 className={s.title}>My list</h2>
    <ChangeDisplayContainer />
    <MyListPanelContainer />
  </div>
);
export default MyList;
