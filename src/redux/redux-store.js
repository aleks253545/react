import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './search-reducer';

const reducers = combineReducers({ searchPage: searchReducer });
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
