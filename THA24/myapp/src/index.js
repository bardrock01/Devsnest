import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import Home from "./home";
import About from "./about";
import Profile from "./profile";
import Dashboard from "./dashboard";

const App = () => {
  const [login, setLogin] = useState("notLoggedIn");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    setLoading("Loading...");
    setTimeout(() => {
      setLogin("notLoggedIn");
      setLoading("");
    }, 100);
  }, []);

  return (
    <>
      <Router>
        <div className="nav">
          <Link className="link" to="/">
            Ghar
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          {login === "loggedIn" ? (
            <>
              <Link className="link" to="/profile">
                Profile
              </Link>
              <Link className="link" to="/dashboard">
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link className="link" to="/">
                Profile
              </Link>
              <Link className="link" to="/">
                Dashboard
              </Link>
            </>
          )}
        </div>

        <Switch>
          <Route exact path="/">
            <Home
              setLogin={setLogin}
              login={login}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
      <div className="footer">
          <h1>Made by:-Sankalp Senpai</h1>  
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));