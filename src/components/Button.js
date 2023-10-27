import React from "react";
import style from "./Button.module.css";

const Button = ({ onClick, children }) => {
  return (
    <button className={style.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
