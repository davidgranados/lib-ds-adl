import React, { FC, useRef } from "react";

import { toggleClassFromElement } from "../../helpers";
import { TooltipProps } from "../../types";
import { Icon } from "../icon";

import styles from "./tooltip.module.css";

const Tooltip: FC<TooltipProps> = ({ children, textTitle, textBody, dataTestId, id = "tooltip" }) => {
  const tooltipRef = useRef(null);
  const handleOnClickToggle = () => {
    toggleClassFromElement(tooltipRef.current, styles["visible"]);
  };
  return (
    <div
      id={`${id}-wrapper`}
      data-testid={dataTestId ? `${dataTestId}-wrapper}` : `${id}-wrapper`}
      className={styles["wrapper"]}
      onClick={handleOnClickToggle}
    >
      {children}
      <div id={id} data-testid={dataTestId || id} ref={tooltipRef} className={styles["content-wrapper"]}>
        <div
          id={`${id}-content-body`}
          data-testid={dataTestId ? `${dataTestId}-content-body` : `${id}-content-body`}
          className={styles["content-body"]}
        >
          <span
            id={`${id}-icon-wrapper`}
            data-testid={dataTestId ? `${dataTestId}-icon-wrapper` : `${id}-icon-wrapper`}
            className={styles["icon-wrapper"]}
          >
            <Icon id={`${id}-close-icon`} name={"close"} className={styles["icon-close"]} />
          </span>
          <div
            id={`${id}-content-text`}
            data-testid={dataTestId ? `${dataTestId}-content-text` : `${id}-content-text`}
            className={styles["content-text"]}
          >
            <span>{textTitle}</span>
            <span>{textBody}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
