import React from "react";
import InsightPreview from "../components/InsightPreview";

export default function InsightList(props) {
  return (
    <div className="list">
      {props.insights.map((insight, i) => (
        <InsightPreview
          key={i}
          insight={insight}
          onDelete={props.onDelete} onSave={props.onSave}
        ></InsightPreview>
      ))}
    </div>
  );
}
