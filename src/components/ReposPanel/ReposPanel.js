import React from 'react';
import s from './ReposPanel.module.css';
import ReposLineContainer from '../ReposLine/ReposLineContainer';
import ReposBlockContainer from '../ReposBlock/ReposBlockContainer';


const ReposPanel = (props) => {
  const renderRepos = [];
  let repos; let btnMore; let noFound;
  for (let i = 0; i < props.visibleIndex; i++) {
    renderRepos.push(props.repositories[i]);
  }
  if (props.display === 'line') {
    repos = renderRepos.map((item) => <ReposLineContainer key={item.id} item={item} tag={props.tag} />);
  } else if (props.display === 'block') {
    repos = renderRepos.map((item) => <ReposBlockContainer key={item.id} item={item} tag={props.tag} />);
  }
  if (renderRepos.length > 0) {
    btnMore = (
      <button
        className={s.btn_more}
        onClick={() => props.ShowMoreRepos()}
      >
Show more
      </button>
    );
  }
  if (props.repositories.length === 0) {
    noFound = (
      <div className={s.block_found}>
        <h2 className={s.title_found}>No Result found</h2>
        <span className={s.fext_found}>select other parameters and try again</span>
      </div>
    );
  }
  return (
    <div className={s.repos_panel}>
      {repos}
      {noFound}
      {btnMore}
    </div>
  );
};
export default ReposPanel;
