import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <main>
      <div class="row">
        <div class="colm-form">
          <div class="form-container">
            <input type="text" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <button class="btn-login">Login</button>
            <button class="btn-new">Create new Account</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
