import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import ReposPanel from './ReposPanel';
import {addVisibleRepos} from '../../redux/search-reducer'
let mapStateToProps=(state)=>{
    return{
        repositories:state.searchPage.findRepos,
        tag:state.searchPage.activeTag,
        display:state.searchPage.display,
        visibleIndex:state.searchPage.visibleIndex
    }
}
let mapDispatchToProps=(dispath)=>{
    return{
        ShowMoreRepos:()=>{
            dispath(addVisibleRepos());
        }
    }
}
const ReposPanelContainer=connect(mapStateToProps,mapDispatchToProps)(ReposPanel);
export default ReposPanelContainer;