import React, { useState } from "react";
import styles from "./dialog.module.css";
import { Testable } from "../../types";

export interface DialogProps extends Testable {
  show: boolean;
  width?: number;
  onToggle?: (state: boolean) => void;
}

const Dialog: React.FC<DialogProps> = ({ onToggle, show, children, width, dataTestId, id = "dialog" }) => {
  const [wasClosed, setWasClosed] = useState(false);

  const handleToggle = () => {
    !wasClosed && setWasClosed(true);
    onToggle && onToggle(!show);
  };
  return (
    <div
      id={`${id}-wrapper`}
      data-testid={dataTestId ? `${dataTestId}-wrapper` : `${id}-wrapper`}
      className={`${styles["wrapper"]} ${show && styles["show"]} ${wasClosed && styles["close"]}`}
    >
      <div id={`${id}-wrapper-overflow`} className={styles["overflow"]} onClick={() => handleToggle()} />
      <div id={id} data-testid={dataTestId || id} className={styles["modal"]} style={{ width }}>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
