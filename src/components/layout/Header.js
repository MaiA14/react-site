import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <img
          className="fairy-img"
          src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1602347800/cnzsjgoawu29fwoqi7ac.png"
          alt="fairy-img"
        ></img>
        <h2 className="desktop-header">לגבש אסטרטגיה</h2>
      </div>
    );
  }
}
