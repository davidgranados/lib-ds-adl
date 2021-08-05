import classNames from "classnames";
import React, { FC, useRef, useState } from "react";

import { toggleClassFromElement } from "../../helpers";
import { TooltipProps } from "../../types";
import { Icon } from "../icon";

import styles from "./tooltip.module.css";

const Tooltip: FC<TooltipProps> = ({
  children,
  textTitle,
  textBody,
  dataTestId,
  marginLeft = 0,
  marginRight = 0,
  id = "tooltip",
  fullWidth = false,
}) => {
  const contentWrapperClassName = classNames(styles["content-wrapper"], {
    [styles["content-wrapper--static-width"]]: !fullWidth,
  });
  const [showArrow, setShowArrow] = useState(false);
  const [tooltipFullWidthInlineStyles, setTooltipFullWidthInlineStyles] = useState({
    width: `calc(calc(100vw - ${marginLeft}px) - ${marginRight}px)`,
  });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef(null);
  const handleOnClickToggle = () => {
    if (fullWidth && wrapperRef.current) {
      setTooltipFullWidthInlineStyles((prevState) => {
        return { ...prevState, left: `calc(${marginLeft}px - ${wrapperRef.current?.getBoundingClientRect().x}px)` };
      });
    }
    toggleClassFromElement(tooltipRef.current, styles["visible"]);
    setShowArrow((prevState) => !prevState);
  };
  return (
    <div
      ref={wrapperRef}
      id={`${id}-wrapper`}
      data-testid={dataTestId ? `${dataTestId}-wrapper` : `${id}-wrapper`}
      className={styles["wrapper"]}
      onClick={handleOnClickToggle}
    >
      <div
        id={id}
        data-testid={dataTestId || id}
        ref={tooltipRef}
        className={contentWrapperClassName}
        style={fullWidth ? tooltipFullWidthInlineStyles : undefined}
      >
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
            {!!textTitle && <span>{textTitle}</span>}
            {!!textBody && <span>{textBody}</span>}
          </div>
        </div>
      </div>
      {showArrow && <span className={styles["wrapper-arrow"]} />}
      {children}
    </div>
  );
};

export default Tooltip;
