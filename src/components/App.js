import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HeaderApp from './HeaderApp/HeaderApp';
import SearchBox from './SearchBox/SearchBox';
import Footer from './Footer/footer';
import MyList from './MyList/MyList';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <HeaderApp />
        <main className="main-content">
          <Route path="/" component={SearchBox} ><Redirect to="/search" /></Route>
          <Route path="/search" component={SearchBox} />
          <Route path="/my-list" component={MyList} />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
