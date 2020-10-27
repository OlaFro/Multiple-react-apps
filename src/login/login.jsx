import React, { Component } from "react";
import "./login.css";

export default class Login extends Component {
  state = {
    user: {
      email: "",
      password: "",
    },
  };

  readValue = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <div className="login">
        <h3>Please log in</h3>
        <input
          onChange={this.readValue}
          type="text"
          placeholder="Your email"
          name="email"
        />
        <input
          onChange={this.readValue}
          type="password"
          placeholder="Your password"
          name="password"
        />
        <input
          onClick={() => {
            this.props.check(this.state.user);
          }}
          type="button"
          value="Log in"
        />
      </div>
    );
  }
}
