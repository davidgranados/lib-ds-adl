import React, { FC } from "react";
import styles from "./progress-wizard.module.css";

export interface ProgressWizardProps {
  items: string[];
  currentItem: number;
}

const ProgressWizard: FC<ProgressWizardProps> = ({ items, currentItem }) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <div
          className={`border ${styles["numeric-circle"]} ${currentItem >= index ? styles["fill"] : ""}`}
          key={`numeric-circle-${item}`}
        >
          <div className={styles["numeric-circle-border"]}>{index + 1}</div>
          <div className={styles.text}>{item}</div>
        </div>
      ))}
      {/* <div
        className={styles["progress-bar"]}
        style={{ width: `calc((100% / ${items.length - 1}) * ${currentItem})` }}
      ></div> */}
      <div className={styles["progress-bar"]}></div>
    </div>
  );
};

export default ProgressWizard;
