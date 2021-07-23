import React, { FC, useRef } from "react";

import { toggleClassFromElement } from "../../helpers";
import { TooltipProps } from "../../types";
import { Icon } from "../icon";

import styles from "./tooltip.module.css";

const Tooltip: FC<TooltipProps> = ({ children, textTitle, textBody }) => {
  const tooltipRef = useRef(null);
  const handleOnClickToggle = () => {
    toggleClassFromElement(tooltipRef.current, styles["visible"]);
  };
  return (
    <div className={styles["wrapper"]} onClick={handleOnClickToggle}>
      {children}
      <div ref={tooltipRef} className={styles["tooltip-wrapper"]}>
        <div className={styles["tooltip-body"]}>
          <span className={styles["icon-wrapper"]}>
            <Icon name={"close"} className={styles["icon-close"]} />
          </span>
          <div className={styles["tooltip-text"]}>
            <span>{textTitle}</span>
            <span>{textBody}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
