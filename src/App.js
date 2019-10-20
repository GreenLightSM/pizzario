import React from "react";
import "./App.css";
import Profile from "./components/Profile/profile";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
