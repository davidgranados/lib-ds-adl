import React, { FC } from "react";

import { TooltipIconProps } from "../../types";
import { Tooltip } from "../tooltip";
import { Icon } from "../icon";
import { getSuffixedId } from "../../helpers";

import responsiveStyles from "../../assets/css/responsive-helpers.module.css";
import styles from "./tooltip-icon.module.css";

const TooltipIcon: FC<TooltipIconProps> = ({
  marginLeft,
  marginRight,
  textTitle,
  textBody,
  icon,
  dataTestId,
  id = "tooltip-icon",
}) => {
  return (
    <>
      <span
        {...getSuffixedId(id, "mobile-span-wrapper", dataTestId)}
        className={responsiveStyles["mobile-inline-only"]}
      >
        <Tooltip
          {...getSuffixedId(id, "mobile", dataTestId, true)}
          fullWidth
          marginLeft={marginLeft}
          marginRight={marginRight}
          textTitle={textTitle}
          textBody={textBody}
        >
          {icon || (
            <Icon
              {...getSuffixedId(id, "mobile-trigger", dataTestId, true)}
              name={"exclamation-open-circle"}
              className={styles["trigger"]}
            />
          )}
        </Tooltip>
      </span>
      <span
        {...getSuffixedId(id, "desktop-span-wrapper", dataTestId)}
        className={responsiveStyles["desktop-inline-only"]}
      >
        <Tooltip {...getSuffixedId(id, "desktop", dataTestId, true)} textTitle={textTitle} textBody={textBody}>
          {icon || (
            <Icon
              {...getSuffixedId(id, "desktop-trigger", dataTestId, true)}
              name={"exclamation-open-circle"}
              className={styles["trigger"]}
            />
          )}
        </Tooltip>
      </span>
    </>
  );
};

export default TooltipIcon;
