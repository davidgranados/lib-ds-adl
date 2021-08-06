import React, { useState } from "react";

import { ModalProps } from "../../types";
import { Button } from "../../atoms/button";
import { getId, getSuffixedId } from "../../helpers";
import { Icon } from "../../atoms/icon";

import styles from "./modal.module.css";

const Modal: React.FC<ModalProps> = ({
  title,
  show,
  buttonText,
  isDisabledButton,
  onToggle,
  children,
  dataTestId,
  id = "modal",
}) => {
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
      <div className={styles["overflow"]} onClick={() => handleToggle()} />
      <div {...getId(id, dataTestId)} className={styles["modal"]}>
        <div className={styles["header"]}>
          <div className={styles["close"]}>
            <Icon
              {...getSuffixedId(id, "icon-close", dataTestId, true)}
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
              {...getSuffixedId(id, "primary-button", dataTestId, true)}
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
