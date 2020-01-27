import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import ReposBlock from './ReposBlock';
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
const ReposBlockContainer=connect(mapStateToProps,mapDispatchToProps)(ReposBlock);
export default ReposBlockContainer;