import React from 'react';
import line from '../../img/line.png';
import tile from '../../img/tile.png';
import s from './ChangeDisplay.module.css';

const ChangeDisplay = (props) => {
  const ChangeBlock = () => {
    props.changeDisplay('block');
  };
  const ChangeLine = () => {
    props.changeDisplay('line');
  };
  return (
    <div className={s.change_panel}>
      <img src={tile} onClick={ChangeBlock} />
      <img src={line} onClick={ChangeLine} />
    </div>
  );
};
export default ChangeDisplay;
