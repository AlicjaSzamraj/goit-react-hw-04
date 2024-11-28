import React from "react";
import styles from "../styles/ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.ErrorMessage}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
