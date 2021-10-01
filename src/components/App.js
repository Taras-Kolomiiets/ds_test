import React from "react";
import MoviesResults from "./MoviesResults";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="jumbotron">
          <h1>Movies App</h1>
          <p>Who doesn't Love movies?</p>
        </div>
      </div>
      <div className="row">
        <Router>
          <Switch>
            <Route exact path="/" component={MoviesResults} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
