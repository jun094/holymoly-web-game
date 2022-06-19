import cn from "classnames";
import styles from "./Button.module.scss";

function Button({ color, className, children, ...props }) {
  return (
    <button
      {...props}
      className={cn(styles.button, styles[`button_${color}`], className)}
    >
      {children}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  color: "primary",
};
