import { useState } from "react";

import Hole from "components/Hole";

import { useScoreState, useScoreDispatch } from "ScoreContext";
import useInterval from "hooks/useInterval";

import styles from "./Field.module.scss";

function Field({ randomArr, delay, num, limit, isPlay, setIsPlay }) {
  const array = new Array(num).fill(0);

  const dispatch = useScoreDispatch();
  const { count } = useScoreState();
  const [activeNum, setActiveNum] = useState(null);

  useInterval(
    () => {
      setActiveNum(randomArr[count]);
      dispatch({ type: "COUNTUP" });

      if (count === limit) {
        setIsPlay(false);
        setActiveNum(null);
      } else {
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

export default Field;
