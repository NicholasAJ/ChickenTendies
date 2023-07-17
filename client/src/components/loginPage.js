import '../App.css';
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const LoginUser = () => {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})

  //submithandler
  const submithandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/`)
      {}
  }

  return(
    <div>
      Hello Login
    </div>
  )



};

export default LoginUser;