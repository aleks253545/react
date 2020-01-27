import React from 'react'
import RactDom from 'react-dom'
import  s  from './ReposBlock.module.css';
import Vector from "../../img/Vector.png";
const ReposBlock =(props)=>{
    let like, text,tag;
    if(!props.item.like){
        like=s.btn_add_list;
        text='add to list';
    }else {
        like=s.btn_remove_list;
        text='remove from list';
    }
    if(props.tag){
        tag=<div className={s.tag}>{props.tag}</div>;
    }
    return(
        <div className={s.repos}>
            <div className={s.more}>
                <span className={s.likes}>{props.item.watchers} <img src={Vector} className={s.Vector}></img></span>
                <span className={s.language}>{props.item.language}</span>
            </div> 
            <div className={s.info}>
                <h3 className={s.name}>{props.item.name}</h3>
                <span className={s.subname}>{props.item.description}</span>
                <div className={s.tags}>
                    <div className={s.tag}>{props.item.language}</div>
                    {tag}
                </div>
            </div>
            <button className={like} onClick={()=>props.checkLike(props.item.id)}>{text}</button>
        </div>
    )
}
export default ReposBlock