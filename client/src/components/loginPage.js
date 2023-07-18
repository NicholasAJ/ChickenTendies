import '../App.css';
import React from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import axios from "axios";

const LoginUser = (props) => {
  // const[username, setUsername] = useState("");
  // const[password, setPassword] = useState("");
  // const navigate = useNavigate();
  // const [errors, setErrors] = useState({})

  //submithandler
  // const submithandler = (e) => {
  //   e.preventDefault();
  //   console.log(username)
  //   axios
  //     .post(`http://localhost:8000/`)
  //     .then ((res) => {
  //       console.log(res.data)
  //       navigate('/chickentinder/dash')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // };


  return(
    <div>
      hello
      {/* Get Your Tenders
      <form onSubmit={submithandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type='text'
            name='username'
            placeholder='Username'
          />
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            name='password'
            placeholder='Password'
          />
        </div>
        <button type='submit'>Login</button>
      </form> */}
      {/* <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Sign up here</button> */}
    </div>
  );

};

export default LoginUser;