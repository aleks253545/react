import React from 'react';
import s from './ReposLine.module.css';
import Vector from '../../img/Vector.png';


const ReposLine = (props) => {
  let tag;
  const changeCheckboxLike = () => {
    props.checkLike(props.item.id);
  };
  if (props.tag) {
    tag = <div className={s.tag}>{props.tag}</div>;
  }
  return (
    <div className={s.repos}>
      <input id={props.item.id} className={s.checkbox} type="checkbox" checked={props.item.like} onChange={changeCheckboxLike} />
      <label className={s.label} htmlFor={props.item.id}><div className={s.mark} /></label>
      <div className={s.info}>
        <h3 className={s.name}>{props.item.name}</h3>
        <span className={s.subname}>{props.item.description}</span>
        <div className={s.tags}>
          <div className={s.tag}>{props.item.language}</div>
          {tag}
        </div>
      </div>
      <div className={s.more}>
        <span className={s.likes}>
          {props.item.watchers}
          {' '}
          <img src={Vector} className={s.Vector} />
        </span>
        <span className={s.language}>{props.item.language}</span>
      </div>
    </div>
  );
};
export default ReposLine;
