import classNames from "classnames";
import React, { useRef } from "react";

import { addClassToElement, removeClassFromElement } from "../../helpers";
import ButtonBase from "../button-base/button-base";

import { ButtonTextProps } from "./types";

import buttonTextStyles from "./button-text.module.css";

const ButtonText: React.FC<ButtonTextProps> = ({
  text,
  onClick,
  onFocus,
  onBlur,
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const buttonTextClassName = classNames(buttonTextStyles["default"], buttonTextStyles[variant]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    addClassToElement(buttonRef, buttonTextStyles[`${variant}-focus`]);
    onFocus && onFocus(event);
  };
  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    removeClassFromElement(buttonRef, buttonTextStyles[`${variant}-focus`]);
    onBlur && onBlur(event);
  };
  return (
    <ButtonBase
      ref={buttonRef}
      fontSize={size}
      className={buttonTextClassName}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonBase>
  );
};

export default ButtonText;
