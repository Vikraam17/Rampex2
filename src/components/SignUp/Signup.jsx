import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="container1">
      <div className="body1">
        <h1 className="header">Sign up</h1>
        <div className="bodyContent">
          <label className="floatingInput">Email:</label>
          <input
            className="form-control"
            id="email"
            type="email"
            placeholder="Enter Your Email"
          />
          <label className="floatingInput">Password:</label>
          <input
            className="form-control"
            id="password"
            type="password"
            placeholder="Enter Password"
          />
          <label className="floatingInput">Confirm Password:</label>
          <input
            className="form-control"
            id="password"
            type="password"
            placeholder="Enter the same Password"
          />
        </div>
        <button className="btn btn-success">Submit</button>
        <p className="signup-link">
          Already have an account? <Link to="/Login">Log In</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup