import React from "react";

import { Checkbox } from "../../atoms/checkbox";
import { CheckboxFieldProps } from "../../types";

import styles from "./checkbox-field.module.css";

const CheckboxField: React.FC<CheckboxFieldProps> = ({ id, disabled, name, children, onChange }) => {
  return (
    <div className={styles["wrapper"]}>
      <Checkbox id={id} name={name} disabled={disabled} onChange={onChange} />
      <div className={styles["label"]}>{children}</div>
    </div>
  );
};

export default CheckboxField;
