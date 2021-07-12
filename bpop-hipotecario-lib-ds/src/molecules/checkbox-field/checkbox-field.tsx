import React from "react";

import styles from "./checkbox-field.module.css";
import { CheckboxFieldProps } from "./checkbox-field.d";
import { Checkbox } from "../../atoms/checkbox";

const CheckboxField: React.FC<CheckboxFieldProps> = ({ id, isDisabled, text, onChange }) => {
  return (
    <div className={styles["wrapper"]}>
      <Checkbox id={id} isDisabled={isDisabled} onChange={onChange} />
      <label htmlFor={id} className={styles["label"]}>
        {text}
      </label>
    </div>
  );
};

export default React.memo(CheckboxField);
