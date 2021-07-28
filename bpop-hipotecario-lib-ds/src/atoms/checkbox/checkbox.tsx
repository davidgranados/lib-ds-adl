import React from "react";

import { CheckboxProps } from "../../types";
import { Icon } from "../icon";

import styles from "./checkbox.module.css";

const Checkbox: React.FC<CheckboxProps> = ({
  wrapperId,
  controlId,
  dataTestId,
  wrapperDataTestId,
  controlDataTestId,
  disabled,
  hasError,
  id = "checkbox",
  ...props
}) => {
  return (
    <label
      id={wrapperId || `${id}-wrapper`}
      data-testid={wrapperDataTestId || wrapperId || `${id}-wrapper`}
      className={`${styles["wrapper"]} ${disabled ? styles["disabled"] : styles["enabled"]} ${
        hasError ? styles["error"] : ""
      }`}
    >
      <input
        id={id}
        data-testid={dataTestId || id}
        className={styles["input"]}
        type="checkbox"
        disabled={disabled}
        {...props}
      />
      <span
        id={controlId || `${id}-control`}
        data-testid={controlDataTestId || controlId || `${id}-control`}
        className={styles["checkmark"]}
      >
        <Icon id={`${id}-icon-check`} name={"check"} className={styles["icon-check"]} />
      </span>
    </label>
  );
};
export default Checkbox;
