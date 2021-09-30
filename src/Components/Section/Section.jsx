import React from "react";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

function Section(props) {
  let total = props.state.good + props.state.neutral + props.state.bad;

  return (
    <div>
      {total > 0 ? (
        <Statistics
          state={props.state}
          countTotalFeedback={props.countTotalFeedback}
          countPositiveFeedbackPercentage={
            props.countPositiveFeedbackPercentage
          }
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

export default Section;
