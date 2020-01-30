import React from 'react';
import ReactDom from 'react-dom';
import s from './SearchBox.module.css';
import ChangeDisplayContainer from '../ChangeDisplay/ChangeDisplayContainer';
import ReposPanelContainer from '../ReposPanel/ReposPanelContainer';
import SearchPanelContainer from '../SearchPanel/SearchPanelContainer';

const SearchBox = (props) => (
  <div className={s.search_box}>
    <SearchPanelContainer />
    <ChangeDisplayContainer />
    <ReposPanelContainer />
  </div>
);
export default SearchBox;
