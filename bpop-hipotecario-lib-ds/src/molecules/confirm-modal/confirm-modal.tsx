import React, { useCallback } from "react";

import { ConfirmModalProps } from "../../types";
import { Button } from "../../atoms/button";

import styles from "./confirm-modal.module.css";
import Dialog from "../../atoms/dialog/dialog";

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  show,
  title,
  description,
  mainButtonText,
  onMainButtonClick,
  secondaryButtonText,
  onSecondaryButtonClick,
  onToggle,
  dataTestId,
  id = "confirm-modal",
}) => {
  const handleMainClick = useCallback(() => {
    onMainButtonClick && onMainButtonClick();
    onToggle && onToggle(!show);
  }, [onMainButtonClick, onToggle, show]);

  const handleSecondaryClick = useCallback(() => {
    onSecondaryButtonClick && onSecondaryButtonClick();
    onToggle && onToggle(!show);
  }, [onSecondaryButtonClick, onToggle, show]);

  return (
    <Dialog show={show} width={320} onToggle={onToggle} dataTestId={`${id}-${dataTestId}`}>
      <div className={styles["confirm-modal-wrapper"]}>
        <div className={styles["img"]}>
          <span className={`${styles["icon"]} icon-exclamation-open-circle`}></span>
        </div>
        <div className={styles["title"]}>{title}</div>
        <div className={styles["description"]}>{description}</div>
        <Button
          size="md"
          fullWidth
          variant="primary"
          text={mainButtonText}
          id={`${id}-primary-button`}
          onClick={() => handleMainClick()}
        />
        <span id="secondary-button" className={styles["secondary-button"]} onClick={() => handleSecondaryClick()}>
          {secondaryButtonText}
        </span>
      </div>
    </Dialog>
  );
};

export default React.memo(ConfirmModal);
