import React from 'react';
import ReactDom from 'react-dom';
import s from './SearchPanel.module.css'
const SearchPanel=(props)=>{
    let selectRef = React.createRef();
    let inputRef = React.createRef();
    let onChangeSelect=(e)=>{
        props.changeLanguageFilter(selectRef.current.value);
    }
    let onChangeInput=()=>{
        props.changeTagFilter(inputRef.current.value);
    }
    let downloadRepos=()=>{
        props.findRepos(props.filterLanguage,props.filterTag);
    }
    return(
        <div className={s.search_panel}>
        <select className={s.search_panel_select} >
            <option value="grapefruit">Repositories</option>
        </select>
        <select className={s.search_panel_select} onChange={onChangeSelect} ref={selectRef}>
            <option value="JavaScript">JavaScript</option>
            <option value="css">css</option>
            <option value="Html">Html</option>
            <option value="php">php</option>
            <option value="ruby">ruby</option>
            <option value="c++">c++</option>
            <option value="c#">c#</option>
            <option value="python">python</option>
            <option value="java">java</option>
            <option value="go">go</option>
            <option value="haskel">haskel</option>
        </select>
        <input type='text' className={s.search_panel_input} ref={inputRef} value={props.filterTag} onChange={onChangeInput}></input>
        <button className={s.search_panel_button}  onClick={downloadRepos}>Search</button>
        </div>
    )
}
export default SearchPanel;