import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import * as qs from "query-string";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import Show from "./Show";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Movie />
        </Route>
        <Route path="/show">
          <Show />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
