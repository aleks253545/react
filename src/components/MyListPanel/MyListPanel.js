import React from 'react';
import s from './MyListPanel.module.css';
import ReposLineContainer from '../ReposLine/ReposLineContainer';
import ReposBlockContainer from '../ReposBlock/ReposBlockContainer';


const ReposPanel = (props) => {
  let repos;
  if (props.display === 'line') {
    repos = props.repositories.map((item) => <ReposLineContainer key={item.id} item={item} tag={props.tag} />);
  } else if (props.display === 'block') {
    repos = props.repositories.map((item) => <ReposBlockContainer key={item.id} item={item} tag={props.tag} />);
  }

  return (
    <div className={s.list_panel}>
      {repos}
    </div>
  );
};
export default ReposPanel;
