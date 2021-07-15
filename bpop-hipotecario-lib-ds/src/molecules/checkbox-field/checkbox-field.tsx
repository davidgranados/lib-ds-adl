import React from "react";

import { HiddenInputFieldProps } from "../../types";

import styles from "./checkbox-field.module.css";
import { Checkbox } from "../../atoms/checkbox";

const CheckboxField: React.FC<HiddenInputFieldProps> = ({ id, disabled, label, onChange }) => {
  return (
    <div className={styles["wrapper"]}>
      <Checkbox id={id} disabled={disabled} onChange={onChange} />
      <label htmlFor={id} className={styles["label"]}>
        {label}
      </label>
    </div>
  );
};

export default React.memo(CheckboxField);
