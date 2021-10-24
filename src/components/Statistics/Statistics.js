import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";
import StatisticList from "./StatisticList";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2 className={styles.title}>Statistics</h2>
    {total === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <StatisticList
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
