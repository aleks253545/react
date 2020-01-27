import React from 'react';
import './App.css';
import HeaderApp from './headerApp/HeaderApp';
import SearchBox from './SearchBox/SearchBox';
import {BrowserRouter,Route} from "react-router-dom";
import MyList from './MyList/MyList';

function App() {
  return (
    <div>
    <BrowserRouter>
      <HeaderApp></HeaderApp>
      <Route path='/search' component={SearchBox}/>
      <Route path='/my-list' component={MyList}/>
    </BrowserRouter>
    </div>
  )
}

export default App;
