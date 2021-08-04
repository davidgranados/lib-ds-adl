import React from "react";

import styles from "./alert-badge.module.css";
import { AlertBadgeProps } from "../../types/alert-badge";

const AlertBadge: React.FC<AlertBadgeProps> = ({ children, type = "info" }) => {
  return (
    <div className={`${styles["alert-badge-wrapper"]} ${styles[type]}`}>
      <div className={styles["icon-section"]}>
        <div className={styles["left-line"]}></div>
        <div className={styles["img"]}>
          <span className={`${styles["icon"]} icon-exclamation-open-circle`}></span>
        </div>
      </div>
      <div className={styles["text"]}>{children}</div>
    </div>
  );
};

export default React.memo(AlertBadge);
