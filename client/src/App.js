import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import React, {useState} from 'react';

// const [loggedIn, setLoggedIn] = useState(false);
// const [user, setUser] = useState({});


function App() {
  return (
    <div className="App">
        <div className='page'>
      <BrowserRouter>
        <header className="navbar">
          Chicken Tinder
          <p>
            <NavLink to="/">Home</NavLink>
          </p>
        </header>
            <Routes> 
              <Route path="/"/>
              {/* <Route path="/" />
              <Route path="/" /> */}
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
