import styles from "./Hole.module.scss";
import cn from "classnames";

import { ReactComponent as Mole } from "assets/mole.svg";

function Hole({ active }) {
  const handleScore = () => {};

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
