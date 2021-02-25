import React from "react";
import styles from "./index.module.css";

const Background = () => {
  return (
    <div>
      <div className={styles["some-style"]} />
      <div className={styles["filter"]} />
    </div>
  );
};

export default Background;
