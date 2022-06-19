import GameBoard from "./components/GameBoard";
import { ScoreProvider } from "./ScoreContext";
import getRandomArr from "utils/getRandomArr";

const CHANCE = 10; // 두더지 잡을 수 있는 기회
const NUM = 9; // 두더지 구멍 개수
const DELAY = 1000; // 두더지 등장 간격(초)

function App() {
  const randomArr = getRandomArr(CHANCE, NUM);

  return (
    <ScoreProvider>
      <GameBoard
        randomArr={randomArr}
        chance={CHANCE}
        num={NUM}
        delay={DELAY}
      />
    </ScoreProvider>
  );
}

export default App;
