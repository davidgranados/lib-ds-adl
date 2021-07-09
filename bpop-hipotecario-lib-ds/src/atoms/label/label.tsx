import React from "react";
import styles from "./label.module.css";
import { LabelProps } from "./label.d";

const Label: React.FC<LabelProps> = ({ children, id, ...props }) => {
  return (
    <label htmlFor={id} className={styles["label"]} {...props}>
      {children}
    </label>
  );
};

export default React.memo(Label);
