import React from "react";

import styles from "./radio.module.css";
import { RadioProps } from "./radio.d";

const Radio: React.FC<RadioProps> = ({ id, isDisabled, hasError, value, onChange }) => {
  return (
    <label
      className={`${styles["wrapper"]} ${isDisabled ? styles["disabled"] : styles["enabled"]} ${
        hasError ? styles["error"] : ""
      }`}
      data-testid="radio-label"
    >
      <input id={id} className={styles["input"]} type="radio" disabled={isDisabled} value={value} onChange={onChange} />
      <span className={styles["radio"]}>
        <span className={styles["circle"]}></span>
      </span>
    </label>
  );
};

export default React.memo(Radio);
