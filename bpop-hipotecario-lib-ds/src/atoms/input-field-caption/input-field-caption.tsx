import classNames from "classnames";
import React, { FC } from "react";

import { InputFieldCaptionProps } from "../../types";
import { getId } from "../../helpers";

import styles from "./input-field-caption.module.css";

const InputFieldCaption: FC<InputFieldCaptionProps> = ({
  children,
  dataTestId,
  status = "default",
  id = "input-field-caption",
  ...props
}) => {
  const captionClassName = classNames(styles["default"], { [styles[status]]: status !== "default" });
  return (
    <span {...getId(id, dataTestId)} className={captionClassName} {...props}>
      {children}
    </span>
  );
};

export default InputFieldCaption;
