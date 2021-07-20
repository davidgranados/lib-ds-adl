import React, { useState } from "react";

import { ModalProps } from "../../types";
import { Button } from "../../atoms/button";
import { Icon } from "../../atoms/icon";

import styles from "./modal.module.css";

const Modal: React.FC<ModalProps> = ({ title, show, buttonText, isDisabledButton, onToggle, children }) => {
  const [wasClosed, setWasClosed] = useState(false);

  const handleToggle = () => {
    !wasClosed && setWasClosed(true);
    onToggle && onToggle(!show);
  };

  return (
    <div className={`${styles["wrapper"]} ${show && styles["show"]} ${wasClosed && styles["close"]}`}>
      <div className={styles["overflow"]} onClick={() => handleToggle()}></div>
      <div className={styles["modal"]}>
        <div className={styles["header"]}>
          <div className={styles["close"]}>
            <Icon
              data-testid={"modal-icon-close"}
              name={"close"}
              className={styles["icon"]}
              onClick={() => handleToggle()}
            />
          </div>
          <div className={styles["title"]}>
            <h6>{title}</h6>
          </div>
        </div>
        <div className={styles["content"]}>{children}</div>
        <div className={styles["footer"]}>
          {buttonText && (
            <Button
              variant="primary"
              text={buttonText}
              size="lg"
              disabled={isDisabledButton}
              onClick={() => handleToggle()}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
