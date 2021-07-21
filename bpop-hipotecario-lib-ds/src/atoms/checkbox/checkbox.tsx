import React from "react";

import { CheckboxProps } from "../../types";
import { Icon } from "../icon";

import styles from "./checkbox.module.css";

const Checkbox: React.FC<CheckboxProps> = ({ id, disabled, hasError, onChange, ...props }) => {
  return (
    <label
      className={`${styles["wrapper"]} ${disabled ? styles["disabled"] : styles["enabled"]} ${
        hasError ? styles["error"] : ""
      }`}
      data-testid="checkbox-label"
    >
      <input id={id} className={styles["input"]} type="checkbox" disabled={disabled} onChange={onChange} {...props} />
      <span className={styles["checkmark"]}>
        <Icon name={"check"} className={styles["icon-check"]} />
      </span>
    </label>
  );
};

export default Checkbox;
