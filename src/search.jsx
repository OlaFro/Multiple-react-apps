import React from "react";
import axios from "axios";

class Search extends React.Component {
  state = {
    searchedWord: "",
  };

  formHandler = (e) => {
    e.preventDefault();
    this.setState({
      searchedWord: e.target.value,
    });
  };

  getSearch = () => {
    axios({
      method: "GET",
      url: "https://api.unsplash.com/search/collections",
      headers: {
        "Content-type": "application/json",
        "Accept-Version": "v1",
        Authorization: "Client-ID t3uWzAv5Sqe67jCQUlqdXVGQs_FxlzNL6zwxWUWAu7A",
      },
      params: {
        query: this.state.searchedWord,
      },
    }).then((res) => {
      console.log(res);
      this.props.search(res.data.results);
    });
  };

  render() {
    return (
      <div className="py-3 my-2 d-flex row justify-content-around ">
        <input
          type="text"
          name="search"
          placeholder="type your search"
          onChange={this.formHandler}
        />
        <input
          type="button"
          className="btn btn-primary"
          onClick={this.getSearch}
          value="search"
        />
      </div>
    );
  }
}

export default Search;

//   let url = res.data.results[0].cover_photo.urls.thumb;
//   this.setState({
//     url: url,
//   });
