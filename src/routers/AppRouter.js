import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import Navbar from "../components/Navbar/Navbar";
import RegisterForm from "../components/Register/RegisterForm";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/register">
            <RegisterForm />
          </Route>
          <Route path="/home">
            <Navbar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
