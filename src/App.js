import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>STH</h1>
        <Switch>
          <Route path="/login">
            <h1>heh</h1>
            <Login />
          </Route>
          <Route path="/">
            <h1>Default</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
