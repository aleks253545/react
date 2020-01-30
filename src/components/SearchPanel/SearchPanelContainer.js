import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import SearchPanel from './SearchPanel';
import {
  downloadRepos, changeLanguage, changeTag, getReposFromApi,
} from '../../redux/search-reducer';

const mapStateToProps = (state) => ({
  filterLanguage: state.searchPage.filterLanguage,
  filterTag: state.searchPage.filterTag,
});
const mapDispatchToProps = (dispath) => ({
  findRepos: (language, tag) => {
    dispath(getReposFromApi(language, tag));
  },
  changeLanguageFilter: (value) => {
    dispath(changeLanguage(value));
  },
  changeTagFilter: (value) => {
    dispath(changeTag(value));
  },
});
const SearchPanelContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
export default SearchPanelContainer;
