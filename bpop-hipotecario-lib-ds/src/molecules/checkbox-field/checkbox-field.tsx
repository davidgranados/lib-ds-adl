import React from "react";

import { Checkbox } from "../../atoms/checkbox";
import { CheckboxFieldProps } from "../../types";

import styles from "./checkbox-field.module.css";

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  children,
  fieldWrapperId,
  fieldWrapperDataTestId,
  id = "checkbox",
  ...props
}) => {
  return (
    <div
      id={fieldWrapperId || `${id}-wrapper`}
      data-testid={fieldWrapperDataTestId || fieldWrapperId || `${id}-wrapper`}
      className={styles["wrapper"]}
    >
      <Checkbox id={id} {...props} />
      <div className={styles["label"]}>{children}</div>
    </div>
  );
};

export default CheckboxField;
