import React from "react";

export default function Bar(props) {
  return (
    <div className="bar-chart">
      <div
        className={`the-bar-${props.difficulty}`}
        style={{ width: `${props.percent}%` }}
      >{props.percent}%</div>
      {[6 / 9, 7 / 9, 8 / 9].map((num) => (
        <div className="grade-marker" style={{ width: `${num * 100}%` }}></div>
      ))}
    </div>
  );
}
