import React from "react";

import { AlertBadgeProps } from "../../types";
import { getId, getSuffixedId } from "../../helpers";
import { Icon } from "../../atoms/icon";

import styles from "./alert-badge.module.css";

const AlertBadge: React.FC<AlertBadgeProps> = ({ children, dataTestId, id = "alert-badge", type = "info" }) => {
  return (
    <div {...getId(id, dataTestId)} className={`${styles["wrapper"]} ${styles[type]}`}>
      <div className={styles["icon-section"]}>
        <div className={styles["left-line"]} />
        <div className={styles["img"]}>
          <Icon
            {...getSuffixedId(id, "icon", dataTestId, true)}
            name={"exclamation-open-circle"}
            className={styles["icon"]}
          />
        </div>
      </div>
      <div className={styles["text"]}>{children}</div>
    </div>
  );
};

export default React.memo(AlertBadge);
