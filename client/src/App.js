import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import React from 'react';

import DisplayAll from "./components/dashboard"
import EditReview from "./components/editReview"
import LoginUser from './components/loginPage';
import CreateUser from "./components/signUpPage"
import CreateReview from './components/newReview';
import ViewReview from "./components/singleReview"

function App() {

  return (
    <div className="App">
        <div className='page'>
      <BrowserRouter>
        <header className="navbar">
          <p id='title'>Chicken Tinder</p>
          <p id='homeLink'>
            <NavLink to="/chickentinder/dash">Home</NavLink>
          </p>
        </header>
              {/* <div>
                {
                  loggedIn === true ? <LoginUser onFormSwitch={toggleForm}/> : <CreateUser/>
                }
              </div> */}
            <Routes> 
              <Route path="/chickentinder/dash" element={<DisplayAll/>}/>
              <Route path="/chickentinder/edit/:id" element={<EditReview/>}/>
              <Route path="/chickentinder/login" element={<LoginUser/>}/>
              <Route path="/chickentinder/new" element={<CreateReview/>}/>
              <Route path="/chickentinder/create" element={<CreateUser/>}/> 
              <Route path="/chickentinder/tender/:id" element={<ViewReview/>}/>
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
};

export default App;
