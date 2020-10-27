import React from "react";
import Search from "./search";
import Display from "./display";
import { AppContext } from "../context";

export default class Main extends React.Component {
  state = {
    res: [],
    request: "",
  };

  getSearch = (data) => {
    this.setState({
      res: [...data],
    });
  };

  static contextType = AppContext;

  render() {
    return (
      <React.Fragment>
        {this.context ? (
          <React.Fragment>
            <h1>hallo {`${this.context}`}</h1>
            <h1 className="m-5 text-center">
              React photo-search App{" "}
              <span role="img" aria-label="">
                📸
              </span>
            </h1>
            <div className="container col-10 border mt-5">
              <Search search={this.getSearch} />

              <div>
                {this.state.res.length ? (
                  <Display data={this.state.res} />
                ) : null}
              </div>
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}
