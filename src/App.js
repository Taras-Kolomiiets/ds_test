import "./App.css";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";
import React from "react";

const App = () => {
  const [good, setGood] = React.useState(0);
  const [neutral, setNeutral] = React.useState(0);
  const [bad, setBad] = React.useState(0);

  const state = { good, neutral, bad };
  let total = state.good + state.neutral + state.bad;

  const handlerClick = (value) => {
    switch (value) {
      case "good":
        setGood(() => good + 1);
        break;
      case "neutral":
        setNeutral(() => neutral + 1);
        break;
      case "bad":
        setBad(() => bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (total === 0) {
      return 0;
    }
    let result = (state.good / total) * 100;
    return Math.round(result);
  };

  return (
    <div>
      <FeedbackOptions onClick={handlerClick} />
      <Section
        state={state}
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
      />
    </div>
  );
};

export default App;
