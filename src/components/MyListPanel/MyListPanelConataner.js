import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import MyListPanel from './MyListPanel'

let mapStateToProps=(state)=>{
    return{
        display:state.searchPage.display,
        repositories:state.searchPage.my_list
    }
}
let mapDispatchToProps=(dispath)=>{
    return{
    }
}
const MyListPanelContainer=connect(mapStateToProps,mapDispatchToProps)(MyListPanel);
export default MyListPanelContainer;