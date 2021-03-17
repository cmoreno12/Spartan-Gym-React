import React, { useState } from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./RegisterForm.css";

function RegisterForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
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
    if (state.password === state.confirmPassword) {
    } else {
    }
  };
  return (
    <div className="register-container">
      <div className="card col-12 col-lg-4 register-card">
        <h1 className="text-center">Register </h1>
        <form className="d-flex flex-column">
          <div className="form-group text-left my-2">
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
          <div className="form-group text-left my-2">
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
          <div className="form-group text-left my-2">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={state.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary my-2"
            onClick={handleSubmitClick}
          >
            Register
          </button>
        </form>
        <div
          className="alert alert-success my-2 "
          style={{ display: state.successMessage ? "block" : "none" }}
          role="alert"
        >
          {state.successMessage}
        </div>
        <div className="my-3">
          <span>Already have an account? </span>
          <NavLink to="/login">Login here</NavLink>
        </div>
      </div>
    </div>
  );
}

export default withRouter(RegisterForm);
