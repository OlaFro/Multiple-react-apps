import React from "react";
import ImgCard from "./imgCard";

class Display extends React.Component {
  state = {};
  render() {
    return (
      <div className="container border mb-3">
        {this.props.data.map((element) => {
          return <ImgCard url={element.cover_photo.urls.thumb} />;
        })}
      </div>
    );
  }
}

export default Display;
