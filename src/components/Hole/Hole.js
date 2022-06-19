import styles from "./Hole.module.scss";
import cn from "classnames";

import { useScoreDispatch } from "ScoreContext";
import { ReactComponent as Mole } from "assets/mole.svg";

function Hole({ active }) {
  const dispatch = useScoreDispatch();

  const handleScore = () => {
    if (active) dispatch({ type: "PLUSE" });
  };

  return (
    <div className={styles.wrapper} onClick={handleScore}>
      <Mole className={cn(styles.mole, active && styles.mole_active)} />
    </div>
  );
}

export default Hole;

Hole.defaultProps = {
  active: false,
};
