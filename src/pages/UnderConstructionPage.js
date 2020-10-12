import React, { Component } from "react";
import { Fragment } from "react";

export default class UnderConstructionPage extends Component {
  goBack = () => {
    this.props.history.push("/insights");
  };

  render() {
    return (
      <div className="container margin-under-construction">
        <img
          src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1602328496/x2ewtd4ekgrughikvtlf.jpg"
          className="construction-img"
          alt="construction-img"
        ></img>
        <button className="insight-btn" onClick={this.goBack}>
          חזור
        </button>
      </div>
    );
  }
}
