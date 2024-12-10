import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  return (
    <div className="container1">
      <div className="body1">
        <h1 className="header">Log In</h1>
        <div className="bodyContent">
          <label className="text">Email:</label>
          <input
            className="inputBox"
            id="email"
            type="email"
            placeholder="Enter Your Email"
          />
          <label className="text">Password:</label>
          <input
            className="inputBox"
            id="password"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <button className="submit-Button">Submit</button>
        <p className="signup-link">
          Don't have an account? <Link to="/SignUp">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
