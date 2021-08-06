import React from "react";

import { CheckboxProps } from "../../types";
import { Icon } from "../icon";
import { getId, getSuffixedId } from "../../helpers";

import styles from "./checkbox.module.css";

const Checkbox: React.FC<CheckboxProps> = ({ dataTestId, disabled, hasError, id = "checkbox", ...props }) => {
  return (
    <label
      {...getSuffixedId(id, "wrapper", dataTestId)}
      className={`${styles["wrapper"]} ${disabled ? styles["disabled"] : styles["enabled"]} ${
        hasError ? styles["error"] : ""
      }`}
    >
      <input {...getId(id, dataTestId)} className={styles["input"]} type="checkbox" disabled={disabled} {...props} />
      <span className={styles["checkmark"]}>
        <Icon {...getSuffixedId(id, "icon-check", dataTestId, true)} name={"check"} className={styles["icon-check"]} />
      </span>
    </label>
  );
};
export default Checkbox;
