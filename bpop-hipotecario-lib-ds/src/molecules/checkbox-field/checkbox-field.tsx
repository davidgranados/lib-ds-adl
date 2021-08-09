import React from "react";

import { Checkbox } from "../../atoms/checkbox";
import { CheckboxFieldProps } from "../../types";
import { getId, getSuffixedId } from "../../helpers";

import styles from "./checkbox-field.module.css";

const CheckboxField: React.FC<CheckboxFieldProps> = ({ children, dataTestId, id = "checkbox-field", ...props }) => {
  return (
    <div {...getSuffixedId(id, "wrapper", dataTestId)} className={styles["wrapper"]}>
      <Checkbox {...getId(id, dataTestId, true)} {...props} />
      <div className={styles["label"]}>{children}</div>
    </div>
  );
};

export default CheckboxField;
