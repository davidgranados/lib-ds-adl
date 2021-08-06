import classNames from "classnames";
import React, { FC } from "react";

import { ButtonProps } from "../../types";

import styles from "./button.module.css";

const Button: FC<ButtonProps> = ({
  text,
  fullWidth,
  dataTestId,
  id,
  type = "button",
  variant = "primary",
  size = "md",
  ...props
}) => {
  const buttonClassName = classNames(styles["default"], styles[variant], styles[`size-${size}`], {
    [styles["full-width"]]: fullWidth,
  });

  return (
    <button id={id} data-testid={dataTestId} className={buttonClassName} type={type} {...props}>
      {text}
    </button>
  );
};

export default Button;
