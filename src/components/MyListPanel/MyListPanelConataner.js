import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import MyListPanel from './MyListPanel';

const mapStateToProps = (state) => ({
  display: state.searchPage.display,
  repositories: state.searchPage.my_list,
});
const mapDispatchToProps = (dispath) => ({
});
const MyListPanelContainer = connect(mapStateToProps, mapDispatchToProps)(MyListPanel);
export default MyListPanelContainer;
