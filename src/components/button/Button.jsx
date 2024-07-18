import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { text, onClick, type, icon, ...rest } = props;

  return (
    <button
      className={`${styles.button} ${type ? styles[`button--${type}`] : ""}`}
      onClick={onClick}
      {...rest}
    >
      {icon && <img src={icon} alt="" className={styles.icon} />}
      {text}
    </button>
  );
};

export default Button;
