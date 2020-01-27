import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import ReposLine from './ReposLine';
import {changeLike} from '../../redux/search-reducer';
let mapStateToProps=(state)=>{
    return{
    }
}
let mapDispatchToProps=(dispath)=>{
    return{
        checkLike:(id)=>{
            dispath(changeLike(id))
        }
    }
}
const ReposLineContainer=connect(mapStateToProps,mapDispatchToProps)(ReposLine);
export default ReposLineContainer;