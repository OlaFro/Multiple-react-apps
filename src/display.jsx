import React from "react";
import ImgCard from "./imgCard";

class Display extends React.Component {
  state = {};
  render() {
    return (
      <div className="container border mb-3">
        display{<ImgCard url={this.props.data.cover_photo.urls.thumb} />}
      </div>
    );
  }
}

export default Display;
