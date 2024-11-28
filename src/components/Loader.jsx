import React from "react";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
