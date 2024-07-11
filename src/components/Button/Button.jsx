import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { text, onClick, type, icon, ...rest } = props;

  return (
    /* props: 텍스트, 모듈 css 타입, 온클릭 함수, 아이콘 src */
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
