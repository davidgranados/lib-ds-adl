import React, { FC, useRef } from "react";

import { removeClassFromElement, toggleClassFromElement } from "../../helpers";
import { TooltipProps } from "../../types";
import "../../icons/icomoon.css";

import tooltipStyles from "./tooltip.module.css";

const Tooltip: FC<TooltipProps> = ({ children, textTitle, textBody }) => {
  const tooltipRef = useRef(null);
  const handleOnClickToggle = () => {
    if (tooltipRef.current) {
      toggleClassFromElement(tooltipRef.current, tooltipStyles["visible"]);
    }
  };
  const handleOnClickClose = () => {
    if (tooltipRef.current) {
      removeClassFromElement(tooltipRef.current, tooltipStyles["visible"]);
    }
  };
  return (
    <div className={tooltipStyles["wrapper"]}>
      <div onClick={handleOnClickToggle}>{children}</div>
      <div ref={tooltipRef} className={tooltipStyles["tooltip-wrapper"]}>
        <div className={tooltipStyles["tooltip-body"]}>
          <span className={tooltipStyles["icon-wrapper"]} onClick={handleOnClickClose}>
            <i className={"icon-close"} />
          </span>
          <div className={tooltipStyles["tooltip-text"]}>
            <span>{textTitle}</span>
            <span>{textBody}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
