import React, { useState } from "react";

import { DialogProps } from "../../types";
import { getSuffixedId } from "../../helpers";

import styles from "./dialog.module.css";

const Dialog: React.FC<DialogProps> = ({ onToggle, show, children, width, dataTestId, id = "dialog" }) => {
  const [wasClosed, setWasClosed] = useState(false);

  const handleToggle = () => {
    !wasClosed && setWasClosed(true);
    onToggle && onToggle(!show);
  };
  return (
    <div
      {...getSuffixedId(id, "wrapper", dataTestId)}
      className={`${styles["wrapper"]} ${show && styles["show"]} ${wasClosed && styles["close"]}`}
    >
      <div
        {...getSuffixedId(id, "wrapper-overflow", dataTestId)}
        className={styles["overflow"]}
        onClick={() => handleToggle()}
      />
      <div className={styles["modal"]} style={{ width }}>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
