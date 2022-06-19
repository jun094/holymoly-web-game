import Button from "components/Button";

import styles from "./GameButton.module.scss";

function GameButton({ children, onClick }) {
  return (
    <Button className={styles.wrapper} onClick={onClick}>
      {children}
    </Button>
  );
}

export default GameButton;
