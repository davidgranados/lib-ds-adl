import classNames from "classnames";
import React, { FC, useRef, useState } from "react";

import { getId, getSuffixedId, toggleClassFromElement } from "../../helpers";
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
      {...getSuffixedId(id, "wrapper", dataTestId)}
      className={styles["wrapper"]}
      onClick={handleOnClickToggle}
    >
      <div
        {...getId(id, dataTestId)}
        ref={tooltipRef}
        className={contentWrapperClassName}
        style={fullWidth ? tooltipFullWidthInlineStyles : undefined}
      >
        <div className={styles["content-body"]}>
          <span className={styles["icon-wrapper"]}>
            <Icon
              {...getSuffixedId(id, "icon-close", dataTestId, true)}
              name={"close"}
              className={styles["icon-close"]}
            />
          </span>
          <div className={styles["content-text"]}>
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
