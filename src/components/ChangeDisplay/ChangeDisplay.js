import React from 'react';
import ReactDom from 'react-dom'
import line from '../../img/line.png'
import tile from '../../img/tile.png'
import s from './ChangeDisplay.module.css'
const ChangeDisplay=(props)=>{
    let ChangeBlock=()=>{
        props.changeDisplay('block')
    }
    let ChangeLine=()=>{
        props.changeDisplay('line')
    }
    return(<div className={s.change_panel}> 
        <img src={tile} data-change='block' onClick={ChangeBlock}></img> 
        <img src={line} data-change='line' onClick={ChangeLine}></img> 
        </div>)
}
export default ChangeDisplay;