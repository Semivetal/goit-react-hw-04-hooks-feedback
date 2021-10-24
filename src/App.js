import styles from "./App.module.css";
import React, { useState } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  const handleIncrement = (event) => {
    const feedbackType = event.target.textContent.toLowerCase();

    if (feedbackType === "good") {
      setGood((prevGood) => prevGood + 1);
    }

    if (feedbackType === "neutral") {
      setNeutral((prevNeutral) => prevNeutral + 1);
    }

    if (feedbackType === "bad") {
      setBad((prevBad) => prevBad + 1);
    }
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section className={styles.container} title="Please leave Feedback">
        <FeedbackOptions
          options={["Good", "Neutral", "Bad"]}
          onLeaveFeedback={handleIncrement}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </>
  );
}

export default App;
