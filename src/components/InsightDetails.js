import React, { Component } from "react";

export default class InsightDetails extends Component {
  render() {
    const { insight } = this.props;
    return (
      <div className="container details-c">
        <div className="insight-preview details">
          <p className="insight-content-container">{insight.content}</p>
          <small>
            {insight.contributorsCount} משתתפים תומכים בטענה זו (
            {insight.contributorsPercent}% מהתשובות)
          </small>
        </div>
        <button className="insight-btn" onClick={this.props.goBack}>
          חזור
        </button>
      </div>
    );
  }
}
