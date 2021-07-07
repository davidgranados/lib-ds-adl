import classNames from "classnames";
import React from "react";

import { ButtonTextProps } from "../../types/button";

import buttonTextStyles from "./button-text.module.css";

export const ButtonText: React.FC<ButtonTextProps> = ({
  label,
  type = "button",
  variant = "primary",
  size = "md",
  ...props
}) => {
  const buttonTextClassName = classNames(
    buttonTextStyles["default"],
    buttonTextStyles[variant],
    buttonTextStyles[`size-${size}`]
  );
  return (
    <button type={type} className={buttonTextClassName} {...props}>
      {label}
    </button>
  );
};
