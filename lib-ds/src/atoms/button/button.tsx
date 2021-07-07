import React from "react";
import classNames from "classnames";

import { ButtonProps } from "../../types";

import buttonStyles from "./button.module.css";

export const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  variant = "primary",
  size = "md",
  ...props
}) => {
  const buttonClassName = classNames(buttonStyles["default"], buttonStyles[variant], buttonStyles[`size-${size}`]);
  return (
    <button type={type} className={buttonClassName} {...props}>
      {label}
    </button>
  );
};
