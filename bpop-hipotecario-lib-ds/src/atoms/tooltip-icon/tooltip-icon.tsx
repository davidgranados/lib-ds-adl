import React, { FC } from "react";

import { TooltipIconProps } from "../../types";
import { Tooltip } from "../tooltip";
import { Icon } from "../icon";

import responsiveStyles from "../../assets/css/responsive-helpers.module.css";
import styles from "./tooltip-icon.module.css";

const TooltipIcon: FC<TooltipIconProps> = ({ marginLeft, marginRight, textTitle, textBody, icon }) => {
  return (
    <>
      <span className={responsiveStyles["mobile-inline-only"]}>
        <Tooltip fullWidth marginLeft={marginLeft} marginRight={marginRight} textTitle={textTitle} textBody={textBody}>
          {icon || <Icon name={"exclamation-open-circle"} className={styles["trigger"]} />}
        </Tooltip>
      </span>
      <span className={responsiveStyles["desktop-inline-only"]}>
        <Tooltip textTitle={textTitle} textBody={textBody}>
          {icon || <Icon name={"exclamation-open-circle"} className={styles["trigger"]} />}
        </Tooltip>
      </span>
    </>
  );
};

export default TooltipIcon;
