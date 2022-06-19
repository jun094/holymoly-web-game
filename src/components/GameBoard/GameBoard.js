import { useState } from "react";

import Field from "components/Field";
import GameButton from "components/GameButton";
import Score from "components/Score";

import { useScoreState, useScoreDispatch } from "ScoreContext";

import styles from "./GameBoard.module.scss";

function GameBoard({ randomArr, chance, num, delay }) {
  const dispatch = useScoreDispatch();
  const { count } = useScoreState();
  const [isPlay, setIsPlay] = useState(false);

  const onStart = () => {
    setIsPlay(true);
  };
  const onRestart = () => {
    setIsPlay(true);
    dispatch({
      type: "RESET",
    });
  };

  return (
    <article className={styles.container}>
      <div className={styles.wrapper}>
        <header>
          <h2 className={styles.header}>
            Welcome ! <br />
            whack-a-mole
          </h2>
        </header>

        <Field
          randomArr={randomArr}
          delay={delay}
          num={num}
          limit={chance}
          isPlay={isPlay}
          setIsPlay={setIsPlay}
        />

        <footer className={styles.footer}>
          <Score limit={chance}/>
          {count === chance + 1 ? (
            <GameButton onClick={onRestart}>RE START</GameButton>
          ) : (
            <GameButton onClick={onStart}>START</GameButton>
          )}
        </footer>
      </div>
    </article>
  );
}

export default GameBoard;
