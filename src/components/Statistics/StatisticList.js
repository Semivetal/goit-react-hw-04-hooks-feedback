import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const StatisticList = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.list}>
    <li className={styles.item}>
      Good: <span>{good}</span>
    </li>
    <li className={styles.item}>
      Neutral: <span>{neutral}</span>
    </li>
    <li className={styles.item}>
      Bad: <span>{bad}</span>
    </li>
    <li className={styles.item}>
      Total: <span>{total}</span>
    </li>
    <li className={styles.item}>
      Positive feedback: <span>{positivePercentage}%</span>
    </li>
  </ul>
);

StatisticList.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default StatisticList;
