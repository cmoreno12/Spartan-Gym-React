import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="full-container">
      <nav className="navbar navbar-dark bg-dark flex-md-nowrap px-3 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/home">
          Spartan Elite Gym
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="/login">
              Sign out
            </a>
          </li>
        </ul>
      </nav>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/home">
                    <span data-feather="home"></span>
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Switch>
              <Route exact path="/home" component={Home} />
            </Switch>
          </main>
        </div>
      </div>
    </div>
  );
}
