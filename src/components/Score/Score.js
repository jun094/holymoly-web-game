import { useScoreState } from "ScoreContext";

import styles from "./Score.module.scss";

function Score({ limit }) {
  const { score } = useScoreState();

  return (
    <h4 className={styles.score}>
      point : <span className={styles.score_highlight}>{score}</span> / {limit}
    </h4>
  );
}

export default Score;
