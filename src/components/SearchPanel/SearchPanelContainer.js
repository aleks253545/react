import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import SearchPanel from './SearchPanel';
import {downloadRepos,changeLanguage,changeTag,getReposFromApi} from '../../redux/search-reducer';
let mapStateToProps=(state)=>{
    return{
        filterLanguage:state.searchPage.filterLanguage,
        filterTag:state.searchPage.filterTag
    }
}
let mapDispatchToProps=(dispath)=>{
    return{
        findRepos:(language,tag)=>{
            dispath(getReposFromApi(language,tag));
        },
        changeLanguageFilter:(value)=>{  
            dispath(changeLanguage(value))
        },
        changeTagFilter:(value)=>{
            dispath(changeTag(value))
        }
    }
}
const SearchPanelContainer=connect(mapStateToProps,mapDispatchToProps)(SearchPanel);
export default SearchPanelContainer;