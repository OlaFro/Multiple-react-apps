import React from "react";
import Search from "./search";
import Display from "./display";

class Main extends React.Component {
  state = {
    res: [],
    request: "",
  };

  getSearch = (data) => {
    this.setState({
      res: [...data],
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="m-5 text-center">
          React photo-search App{" "}
          <span role="img" aria-label="">
            📸
          </span>
        </h1>
        <div className="container col-10 border mt-5">
          <Search search={this.getSearch} />

          <div>
            {this.state.res.length ? <Display data={this.state.res} /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
