import React from "react";

class ImgCard extends React.Component {
  state = {};
  render() {
    return (
      <div className="container border my-3">
        <img src={this.props.url} alt="" />
      </div>
    );
  }
}

export default ImgCard;
