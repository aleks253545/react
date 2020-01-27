import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import ChangeDisplay from './ChangeDisplay';
import {onChangeDisplay} from '../../redux/search-reducer'
let mapStateToProps=(state)=>{
    return{
    }
}
let mapDispatchToProps=(dispath)=>{
    return{
        changeDisplay:(value)=>{
            dispath(onChangeDisplay(value));
        }
    }
}
const ChangeDisplayContainer=connect(mapStateToProps,mapDispatchToProps)(ChangeDisplay);
export default ChangeDisplayContainer;