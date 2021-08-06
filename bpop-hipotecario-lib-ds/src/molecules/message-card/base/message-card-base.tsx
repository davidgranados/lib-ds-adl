import React, { FC } from "react";

import { Button } from "../../../atoms/button";
import { getId } from "../../../helpers";
import { MessageCardBaseProps } from "../../../types";

import styles from "./message-card-base.module.css";

const MessageCardBase: FC<MessageCardBaseProps> = ({
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
  return (
    <div {...getId(id, dataTestId)} className={styles["wrapper"]}>
      <div className={styles["content-wrapper"]}>
        <img src={iconURL} className={styles["main-icon"]} alt={iconAltAttribute} title={iconTitleAttribute} />
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
