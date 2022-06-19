import {  useState } from "react";

import GameBoard from "components/GameBoard";
import Button from "components/Button";

import getRandomArr from "./utils/getRandomArr";

import styles from "./App.module.scss";

const COUNT = 10; // 두더지 등장 횟수
const NUM = 9; // 두더지 개수
const DELAY = 1000; // 두더지 등장 간격(초)

function App() {
  const randomArr = getRandomArr(COUNT, NUM);
  const [isPlay, setIsPlay] = useState(false);

  const handleStart = () => {
    setIsPlay(true);
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

        <GameBoard
          randomArr={randomArr}
          delay={DELAY}
          num={NUM}
          isPlay={isPlay}
          setIsPlay={setIsPlay}
        />

        <footer>
          <Button onClick={handleStart}>START</Button>
        </footer>
      </div>
    </article>
  );
}

export default App;
