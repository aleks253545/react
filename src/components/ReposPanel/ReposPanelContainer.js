import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import ReposPanel from './ReposPanel';
import { addVisibleRepos } from '../../redux/search-reducer';

const mapStateToProps = (state) => ({
  repositories: state.searchPage.findRepos,
  tag: state.searchPage.activeTag,
  display: state.searchPage.display,
  visibleIndex: state.searchPage.visibleIndex,
});
const mapDispatchToProps = (dispath) => ({
  ShowMoreRepos: () => {
    dispath(addVisibleRepos());
  },
});
const ReposPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ReposPanel);
export default ReposPanelContainer;
