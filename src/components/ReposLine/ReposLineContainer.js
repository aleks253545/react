import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import ReposLine from './ReposLine';
import { changeLike } from '../../redux/search-reducer';

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispath) => ({
  checkLike: (id) => {
    dispath(changeLike(id));
  },
});
const ReposLineContainer = connect(mapStateToProps, mapDispatchToProps)(ReposLine);
export default ReposLineContainer;
