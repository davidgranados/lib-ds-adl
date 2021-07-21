import classNames from "classnames";
import React, { FC } from "react";

import { InputFieldCaptionProps } from "../../types";

import styles from "./input-field-caption.module.css";

const InputFieldCaption: FC<InputFieldCaptionProps> = ({ children, status = "default" }) => {
  const captionClassName = classNames(styles["default"], { [styles[status]]: status !== "default" });
  return <span className={captionClassName}>{children}</span>;
};

export default InputFieldCaption;
