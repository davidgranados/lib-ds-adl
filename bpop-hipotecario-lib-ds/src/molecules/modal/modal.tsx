import React, { useState } from "react";

import { ModalProps } from "../../types";
import styles from "./modal.module.css";
import { Typography } from "../../atoms/typography";
import { Button } from "../../atoms/button";
import "../../icons/icomoon.css";

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
            <span className={`${styles["icon"]} icon-close`} onClick={() => handleToggle()}></span>
          </div>
          <div className={styles["title"]}>
            <Typography variant={"h6"} lineHeight={"h6"} weight={"bold"}>
              {title}
            </Typography>
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
