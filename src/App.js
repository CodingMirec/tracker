import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../../../Clones/Amazon-clone-project/amazon-clone/src/Login";

import "./App.css";

function App() {
  <Router>
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>;
}

export default App;
