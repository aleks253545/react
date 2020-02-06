import React from 'react';
import './App.css';
import HeaderApp from './headerApp/HeaderApp';
import SearchBox from './SearchBox/SearchBox';
import Footer from './Footer/footer'
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import MyList from './MyList/MyList';

function App() {
  return (
    <div class='wrapper'>
    <BrowserRouter>
      <HeaderApp></HeaderApp>
      <main className='main-content'>
      <Route path='/'> <Redirect to='/search'></Redirect></Route>
      <Route path='/search' component={SearchBox}/>
      <Route path='/my-list' component={MyList}/>
      </main>
      <Footer></Footer>
    </BrowserRouter>
    </div>
  )
}

export default App;
