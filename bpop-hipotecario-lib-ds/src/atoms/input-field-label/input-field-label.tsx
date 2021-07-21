import React, { FC } from "react";

import { InputFieldLabelProps } from "../../types";

import styles from "./input-field-label.module.css";

const InputFieldLabel: FC<InputFieldLabelProps> = ({ htmlFor, children, ...props }) => {
  return (
    <label className={styles["default"]} htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
};

export default InputFieldLabel;
