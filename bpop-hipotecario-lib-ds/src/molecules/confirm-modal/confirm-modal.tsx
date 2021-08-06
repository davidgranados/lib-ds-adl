import React, { useCallback } from "react";

import { Button } from "../../atoms/button";
import { ConfirmModalProps } from "../../types";
import { Dialog } from "../../atoms/dialog";
import { getSuffixedId } from "../../helpers";

import styles from "./confirm-modal.module.css";

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
    <Dialog {...getSuffixedId(id, "dialog", dataTestId, true)} show={show} width={320} onToggle={onToggle}>
      <div {...getSuffixedId(id, "wrapper", dataTestId)} className={styles["confirm-modal-wrapper"]}>
        <div className={styles["img"]}>
          <span className={`${styles["icon"]} icon-exclamation-open-circle`} />
        </div>
        <div className={styles["title"]}>{title}</div>
        <div className={styles["description"]}>{description}</div>
        <Button
          {...getSuffixedId(id, "primary-button", dataTestId, true)}
          size="md"
          fullWidth
          variant="primary"
          text={mainButtonText}
          onClick={() => handleMainClick()}
        />
        <span
          {...getSuffixedId(id, "secondary-button", dataTestId)}
          className={styles["secondary-button"]}
          onClick={() => handleSecondaryClick()}
        >
          {secondaryButtonText}
        </span>
      </div>
    </Dialog>
  );
};

export default React.memo(ConfirmModal);
