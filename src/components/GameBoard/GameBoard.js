import { useState } from "react";

import Hole from "components/Hole";
import useInterval from "hooks/useInterval";

import styles from "./GameBoard.module.scss";

function GameBoard({ randomArr, delay, num, isPlay, setIsPlay }) {
  const array = new Array(num).fill(0);

  const [activeNum, setActiveNum] = useState(null);
  const [count, setCount] = useState(0);

  useInterval(
    () => {
      setActiveNum(randomArr[count]);
      setCount(count + 1);

      if (count === randomArr.length) {
        setIsPlay(false);
        setActiveNum(null);
        setCount(0);
      }
    },
    isPlay ? delay : null
  );

  return (
    <div className={styles.field}>
      {array.map((_, idx) => (
        <Hole key={idx} active={idx === activeNum} />
      ))}
    </div>
  );
}

export default GameBoard;
