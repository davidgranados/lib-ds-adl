import React, { CSSProperties, FC } from "react";

import { Button } from "../../atoms/button";
import { getGlobalImageUrl, getId } from "../../helpers";
import { MessageCardBaseProps, MessageCardIcon } from "../../types";

import styles from "./message-card-base.module.css";

const iconMap: Record<MessageCardIcon, string> = {
  warning: getGlobalImageUrl("80-warning.svg"),
  password: getGlobalImageUrl("80-password.svg"),
  authorized: getGlobalImageUrl("80-authorized.svg"),
  default: getGlobalImageUrl("bp-small-logo.svg"),
};

const MessageCardBase: FC<MessageCardBaseProps> = ({
  icon,
  iconURL,
  title,
  textButton,
  iconAltAttribute,
  iconTitleAttribute,
  subtitle,
  onClick,
  dataTestId,
  id = "message-card",
}) => {
  let iconSrc;
  if (iconURL) {
    iconSrc = iconURL;
  } else if (icon) {
    iconSrc = iconMap[icon];
  } else {
    iconSrc = iconMap.default;
  }
  // TODO: Fix this machetazo
  const contentWrapperInlineStyles = {
    "--message-card-background-image": `url(${getGlobalImageUrl("bg-icon-message.svg")})`,
  };
  return (
    <div {...getId(id, dataTestId)} className={styles["wrapper"]}>
      <div className={styles["content-wrapper"]} style={contentWrapperInlineStyles as CSSProperties}>
        <img src={iconSrc} className={styles["main-icon"]} alt={iconAltAttribute} title={iconTitleAttribute} />
        <div className={styles["text-wrapper"]}>
          <h6 className={styles["title"]}>{title}</h6>
          <p className={styles["subtitle"]}>{subtitle}</p>
        </div>
      </div>
      <div className={styles["button-container"]}>
        <div className={styles["button-wrapper"]}>
          <Button variant={"primary"} text={textButton} onClick={onClick} fullWidth />
        </div>
      </div>
    </div>
  );
};

export default MessageCardBase;
