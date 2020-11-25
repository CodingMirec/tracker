import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
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
