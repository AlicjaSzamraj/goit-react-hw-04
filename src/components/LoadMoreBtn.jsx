import React from "react";
import styles from "../styles/LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={styles.LoadMoreBtn} onClick={onClick}>
      Załaduj więcej
    </button>
  );
};

export default LoadMoreBtn;
