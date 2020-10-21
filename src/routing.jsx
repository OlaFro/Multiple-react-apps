import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Main from "./photo-search/Main";
import MainToDo from "./to-do/MainToDo";

import About from "./about/About";

class Routing extends React.Component {
  state = {
    navStyle: {
      display: "flex",
      justifyContent: "space-around",
      margin: "2rem 0 2rem 0",
      padding: "1rem",
    },
  };

  render() {
    return (
      <Router>
        <div style={this.state.navStyle}>
          <Link to="/photo-search/Main">Photo-search app</Link>
          <Link to="/to-do/MainToDo">To-do app</Link>
          <Link to="/about/About">About</Link>
          <Link to="/funcComp/MainFuncComp">Func Component Task</Link>
        </div>
        <Switch>
          <Route path="/photo-search/Main">
            <Main />
          </Route>
          <Route path="/to-do/MainToDo">
            <MainToDo />
          </Route>
          <Route path="/about/About">
            <About />
          </Route>

          {/* <Route path="/funcComp/MainFuncComp">
            <MainFuncComp />
          </Route> */}
        </Switch>
      </Router>
    );
  }
}

export default Routing;
