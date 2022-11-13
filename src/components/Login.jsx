import React, { useState } from "react";
import "./Login.css";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import {
  loginRequest,
  loginSuccess,
  loginError,
} from "../redux/auth/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginRequest());
    setLoading(true);

    const user = { email, password };
    console.log(user);
    axios
      .post("https://cryptic-dawn-15691.herokuapp.com/api/user/login", user)
      .then((response) => {
        dispatch(loginSuccess(response.data));
        setLoading(false);
        navigate("/dashboard");
      })
      .catch((error) => {
        dispatch(loginError(error.message));
        setLoading(false);
      });
  };

  return (
    <main>
      <div class="row">
        <div class="colm-form">
          <div class="form-container">
            <input
              type="text"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button class="btn-login" onClick={handleSubmit}>
              Login
            </button>
            <button class="btn-new">Create new Account</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
