import React from "react";

import { HiddenInputProps } from "../../types";
import "../../icons/icomoon.css";

import styles from "./checkbox.module.css";

const Checkbox: React.FC<HiddenInputProps> = ({ id, disabled, hasError, onChange }) => {
  return (
    <label
      className={`${styles["wrapper"]} ${disabled ? styles["disabled"] : styles["enabled"]} ${
        hasError ? styles["error"] : ""
      }`}
      data-testid="checkbox-label"
    >
      <input id={id} className={styles["input"]} type="checkbox" disabled={disabled} onChange={onChange} />
      <span className={styles["checkmark"]}>
        <i className={`icon-check ${styles["icon-check"]}`}></i>
      </span>
    </label>
  );
};

export default Checkbox;
