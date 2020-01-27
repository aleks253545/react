import { createStore, combineReducers,applyMiddleware } from "redux";
import searchReducer from './search-reducer';
import thunk from 'redux-thunk';

let reducers=combineReducers({searchPage:searchReducer});
let store=createStore(reducers,applyMiddleware(thunk));
export default store; 