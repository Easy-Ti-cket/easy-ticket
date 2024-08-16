// Button.jsx
import React from "react";
import { useAtom } from "jotai";
import { themeSiteAtom } from "../../store/atom";
import styles from "./Button.module.css";

const Button = (props) => {
  const { text, onClick, type, icon, ...rest } = props;
  const [currentTheme] = useAtom(themeSiteAtom);

  const buttonClass = `${styles.button} ${
    currentTheme ? styles[`button--${currentTheme}`] : ""
  } ${
    type === "outline" ? styles[`button--outline--${currentTheme}`] : ""
  } ${type ? styles[`button--${type}`] : ""}`;

  return (
    <button className={buttonClass} onClick={onClick} {...rest}>
      {icon && <img src={icon} alt="" className={styles.icon} />}
      {text}
    </button>
  );
};

export default Button;
