import React from "react";
import "./App.css";
import { BrowserRouter , Router, Switch } from "react-router-dom";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Preferences from "../src/components/Preferences/Preferences";

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Router path="/dashboard">
            <Dashboard />
          </Router>
          <Router path="/preferences">
            <Preferences />
          </Router>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
