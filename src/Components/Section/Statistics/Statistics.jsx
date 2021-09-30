import React from "react";

function Statistics(props) {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {props.state.good}</p>
      <p>Neutral: {props.state.neutral}</p>
      <p>Bad: {props.state.bad}</p>
      <p>Total: {props.countTotalFeedback()}</p>
      <p>Positive feedback: {props.countPositiveFeedbackPercentage()} %</p>
    </div>
  );
}

export default Statistics;
