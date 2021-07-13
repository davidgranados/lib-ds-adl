import React from "react";
import styles from "./label.module.css";
import { HTMLPropsFor } from "../../types";

const Label: React.FC<HTMLPropsFor<"label">> = ({ children, ...props }) => {
  return (
    <label className={styles["default"]} {...props}>
      {children}
    </label>
  );
};

export default React.memo(Label);
