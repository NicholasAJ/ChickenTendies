import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import React, {useState} from 'react';

import dashboard from "./components/dashboard"
import editReview from "./components/editReview"
import LoginUser from './components/loginPage'
import newReview from "./components/newReview"
import CreateUser from "./components/signUpPage"
import singleReview from "./components/singleReview"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const user = (User) => {
    setUser(User);
  }

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
              <Route path="/chickentinder/dash" element={dashboard}/>
              <Route path="/chickentinder/tender/edit" element={editReview}/>
              <Route path="/" element={LoginUser}/> 
              <Route path="/chickentinder/new" element={newReview}/>
              <Route path="/chickentinder/signup" element={CreateUser}/> 
              <Route path="/chickentinder/tender" element={singleReview}/>
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
};

export default App;
