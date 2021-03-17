import React, { useState } from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./LoginForm.css";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    props.history.push("/home");

  };

  return (
    <div className="login-container">
      <img
        className="login-image"
        src="http://drive.google.com/uc?export=view&id=17CrOe8kmBh0gAZ9LaIkN0weo_98KY38A"
        alt="gym"
      ></img>
      <div className="login-card h-100 p-3">
        <h1 className="text-center">Login</h1>
        <form className="d-flex flex-column">
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-3 align-self-center"
            onClick={handleSubmitClick}
          >
            Sign In
          </button>
        </form>
        <div className="registerMessage">
          <span>Dont have an account? </span>
          <NavLink to="/register">Register</NavLink>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
