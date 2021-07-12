import React from "react";

import styles from "./radio-field.module.css";
import { RadioFieldProps } from "./radio-field.d";
import { Radio } from "../../atoms/radio";

const RadioField: React.FC<RadioFieldProps> = ({ id, isDisabled, text, onChange }) => {
  return (
    <div className={styles["wrapper"]}>
      <Radio id={id} isDisabled={isDisabled} onChange={onChange} />
      <label htmlFor={id} className={styles["label"]}>
        {text}
      </label>
    </div>
  );
};

export default RadioField;
