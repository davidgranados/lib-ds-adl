import React from "react";
import "../../icons/icomoon.css";
import styles from "./checkbox.module.css";
import { CheckboxProps } from "./checkbox.d";

const Checkbox: React.FC<CheckboxProps> = ({ id, isDisabled, hasError, onChange }) => {
  return (
    <label
      className={`${styles["wrapper"]} ${isDisabled ? styles["disabled"] : styles["enabled"]} ${
        hasError ? styles["error"] : ""
      }`}
      data-testid="checkbox-label"
    >
      <input id={id} className={styles["input"]} type="checkbox" disabled={isDisabled} onChange={onChange} />
      <span className={styles["checkmark"]}>
        <i className={`icon-check ${styles["icon-check"]}`}></i>
      </span>
    </label>
  );
};

export default React.memo(Checkbox);
