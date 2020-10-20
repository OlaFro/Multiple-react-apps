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
      <div className="container col-10 border mt-5">
        <Search search={this.getSearch} />

        <div>
          {this.state.res.length ? <Display data={this.state.res} /> : null}
        </div>
      </div>
    );
  }
}

export default Main;
