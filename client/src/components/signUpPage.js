import '../App.css';
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateUser = (props) => {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[name, setName] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/user",
      {username, password, name})
      .then ((res) => {
        console.log(res.data);
        navigate('/chickentinder/dash');
      })
      .catch ((err) => {
        console.log(err);
        console.log('catch create clientside USER')
        setErrors(err.response.data.errors)
      });
  };

  return(
    <div>
      <div>
        <h1>Sign up for your Tenders</h1>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <label>Username</label>
          {errors.username ? <p>{errors.username.message}</p>: null}
          <input 
            type='text'
            name='username'
            onChange={(e) => setUsername(e.target.value)}
            value={(username)}
          />
          <label>Password</label>
          {errors.password ? <p>{errors.password.message}</p>: null}
          <input
            type='text'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            value={(password)}
          />
          <label>Name</label>
          {errors.name ? <p>{errors.name.message}</p>: null}
          <input
            type='text'
            name='name'
            onChange={(e) => setName(e.target.value)}
            value={(name)}
          />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
      {/* <button onClick={() => props.onFormSwitch('LoginPage')}>Already have an account? Login Here</button> */}
    </div>
  );

};

export default CreateUser;