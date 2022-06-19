import { useScoreState } from "ScoreContext";

import styles from "./Score.module.scss";

function Score() {
  const { score } = useScoreState();

  window.score = score;
 
  return <h2 className={styles.score}>{score} / 10</h2>;
}

export default Score;
