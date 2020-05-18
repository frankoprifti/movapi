import React, { Component } from "react";
import * as qs from "query-string";
export default class Movie extends Component {
  id = window.location.search.split("=")[1];

  url = "https://database.gdriveplayer.us/player.php?imdb=" + this.id;

  render() {
    return (
      <div>
        <div className="App">
          <iframe
            style={{ width: "100%", height: "100%", borderWidth: 0 }}
            src={this.url}
            sandbox="allow-forms allow-pointer-locks allow-same-origin allow-scripts"
            allowFullScreen
scrolling={"no"}
          />
        </div>
      </div>
    );
  }
}
