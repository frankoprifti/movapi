import React, { Component } from "react";

export default class Show extends Component {
  getJsonFromUrl(url) {
    if (!url) url = window.location.search;
    var query = url.substr(1);
    var result = {};
    query.split("&").forEach(function (part) {
      var item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }
  data = this.getJsonFromUrl(window.location.search);

  url = `https://database.gdriveplayer.io/player.php?type=series&imdb=${this.data.id}&season=${this.data.season}&episode=${this.data.episode}`;

  render() {
    return (
      <div>
        <div className="App">
          <iframe
            style={{ width: "100%", height: "100vh", borderWidth: 0 }}
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
