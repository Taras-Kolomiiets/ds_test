import React from "react";

function FeedbackOptions(props) {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={() => {
          props.onClick("good");
        }}
      >
        Good
      </button>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => {
          props.onClick("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className="btn btn-outline-warning"
        type="button"
        onClick={() => {
          props.onClick("bad");
        }}
      >
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;
