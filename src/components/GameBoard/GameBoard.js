import { useState } from "react";

import Field from "components/Field";
import Button from "components/Button";
import Score from "components/Score";

import { useScoreState, useScoreDispatch } from "ScoreContext";

import styles from "./GameBoard.module.scss";

function GameBoard({ randomArr, chance, num, delay }) {
  const dispatch = useScoreDispatch();
  const { count } = useScoreState();
  const [isPlay, setIsPlay] = useState(false);

  const handleStart = () => {
    setIsPlay(true);
  };
  const handleReStart = () => {
    setIsPlay(true);
    dispatch({
      type: "RESET",
    });
  };

  return (
    <article className={styles.container}>
      <div className={styles.wrapper}>
        <header>
          <h1>
            Welcome ! <br />
            whack-a-mole
          </h1>
        </header>

        <Field
          randomArr={randomArr}
          delay={delay}
          num={num}
          limit={chance}
          isPlay={isPlay}
          setIsPlay={setIsPlay}
        />

        <footer>
          <Score />
          {count === chance + 1 ? (
            <Button onClick={handleReStart}>RE START</Button>
          ) : (
            <Button onClick={handleStart}>START</Button>
          )}
        </footer>
      </div>
    </article>
  );
}

export default GameBoard;
