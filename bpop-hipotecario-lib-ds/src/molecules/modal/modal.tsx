import React, { useState } from "react";

import { ModalProps } from "../../types";
import { Button } from "../../atoms/button";
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
      id={`${id}-wrapper`}
      data-testid={dataTestId ? `${dataTestId}-wrapper` : `${id}-wrapper`}
      className={`${styles["wrapper"]} ${show && styles["show"]} ${wasClosed && styles["close"]}`}
    >
      <div className={styles["overflow"]} onClick={() => handleToggle()} />
      <div id={id} data-testid={dataTestId || id} className={styles["modal"]}>
        <div
          id={`${id}-header`}
          data-testid={dataTestId ? `${dataTestId}-header` : `${id}-header`}
          className={styles["header"]}
        >
          <div
            id={`${id}-close`}
            data-testid={dataTestId ? `${dataTestId}-close` : `${id}-close`}
            className={styles["close"]}
          >
            <Icon id={`${id}-icon-close`} name={"close"} className={styles["icon"]} onClick={() => handleToggle()} />
          </div>
          <div
            id={`${id}-title`}
            data-testid={dataTestId ? `${dataTestId}-title` : `${id}-title`}
            className={styles["title"]}
          >
            <h6>{title}</h6>
          </div>
        </div>
        <div
          id={`${id}-content`}
          data-testid={dataTestId ? `${dataTestId}-content` : `${id}-content`}
          className={styles["content"]}
        >
          {children}
        </div>
        <div
          id={`${id}-footer`}
          data-testid={dataTestId ? `${dataTestId}-footer` : `${id}-footer`}
          className={styles["footer"]}
        >
          {buttonText && (
            <Button
              id={`${id}-primary-button`}
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
