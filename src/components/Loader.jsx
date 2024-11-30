import React from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
