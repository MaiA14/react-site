import React, { Component } from "react";

export default class InsightsSummery extends Component {
  render() {
    return (
      <div className="insights-summery-container">
        <img
          src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1602270619/lao5sir4ow55llhlkgvd.png"
          alt="summery-img"
        ></img>
        <div className="insight-summery-content">
          התהליך עדיין פתוח לתשובות. המשתתפים יוכלו לראות את התובנות הסופיות רק
          לאחר שיאושרו על ידי אחד ממנהלי התהליך.
        </div>
      </div>
    );
  }
}
