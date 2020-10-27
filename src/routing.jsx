import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createContext } from "react";
import Main from "./photo-search/Main";
import MainToDo from "./to-do/MainToDo";
import Login from "./login/login";
import About from "./about/About";
import { Provider } from "./context";

export default class Routing extends React.Component {
  state = {
    navStyle: {
      display: "flex",
      justifyContent: "space-around",
      margin: "2rem 0 2rem 0",
      padding: "1rem",
    },
    users: [
      { email: "ola@ola.com", password: "123" },
      { email: "alice@alice.com", password: "123" },
      { email: "willy@willy.com", password: "123" },
    ],
    isLoggedIn: false,
  };

  isValueRight = (data) => {
    let loggedIn = false;
    loggedIn = this.state.users.some((elem) => {
      return data.email === elem.email && data.password === elem.password;
    });
    console.log(loggedIn);
    this.setState({ isLoggedIn: loggedIn });
  };

  render() {
    return (
      <Router>
        <div style={this.state.navStyle}>
          <Link to="/photo-search/Main">Photo-search app</Link>
          <Link to="/to-do/MainToDo">To-do app</Link>
          <Link to="/about/About">About</Link>
          {/* <Link to="/funcComp/MainFuncComp">Func Component Task</Link> */}
        </div>
        <Switch>
          <Route path="/photo-search/Main">
            <Provider value={this.state.isLoggedIn}>
              <Main />
            </Provider>
          </Route>
          <Route path="/to-do/MainToDo">
            <MainToDo />
          </Route>
          <Route path="/about/About">
            <About />
          </Route>
          <Route path="/">
            {this.state.isLoggedIn ? (
              <Redirect to="/photo-search/Main" />
            ) : (
              <Login check={this.isValueRight} />
            )}
          </Route>
        </Switch>
      </Router>
    );
  }
}
