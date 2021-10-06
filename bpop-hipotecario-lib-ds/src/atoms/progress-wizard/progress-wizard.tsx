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
          key={`numeric-circle-${item}`}
          className={`border ${styles["numeric-circle"]} ${currentItem === index ? styles["current"] : ""} ${
            currentItem > index ? styles["checked"] : ""
          }`}
        >
          <div className={styles["numeric-circle-border"]}>
            {currentItem > index ? <div className={`${styles["icon"]} icon-check`}></div> : index + 1}
          </div>
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
