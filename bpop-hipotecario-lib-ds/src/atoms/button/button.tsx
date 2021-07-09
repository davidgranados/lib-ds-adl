import React, { useRef } from "react";
import classNames from "classnames";

import { addClassToElement, removeClassFromElement } from "../../helpers";
import ButtonBase from "../button-base/button-base";

import { ButtonProps } from "./types";

import buttonStyles from "./button.module.css";

const Button: React.FC<ButtonProps> = ({
  text,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
  onFocus,
  onBlur,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const buttonClassName = classNames(buttonStyles["default"], buttonStyles[variant], buttonStyles[`size-${size}`]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const addActiveClass = () => {
    addClassToElement(buttonRef, buttonStyles[`${variant}-active`]);
  };
  const removeActiveClass = () => {
    removeClassFromElement(buttonRef, buttonStyles[`${variant}-active`]);
  };
  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    addClassToElement(buttonRef, buttonStyles[`${variant}-hover`]);
    onMouseEnter && onMouseEnter(event);
  };
  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    removeClassFromElement(buttonRef, buttonStyles[`${variant}-hover`]);
    onMouseLeave && onMouseLeave(event);
  };
  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    addActiveClass();
    onMouseDown && onMouseDown(event);
  };
  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    removeActiveClass();
    onMouseUp && onMouseUp(event);
  };
  const handleTouchStart = (event: React.TouchEvent<HTMLButtonElement>) => {
    addActiveClass();
    onTouchStart && onTouchStart(event);
  };
  const handleTouchEnd = (event: React.TouchEvent<HTMLButtonElement>) => {
    removeActiveClass();
    onTouchEnd && onTouchEnd(event);
  };
  const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    addClassToElement(buttonRef, buttonStyles[`${variant}-focus`]);
    onFocus && onFocus(event);
  };
  const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    removeClassFromElement(buttonRef, buttonStyles[`${variant}-focus`]);
    onBlur && onBlur(event);
  };

  return (
    <ButtonBase
      ref={buttonRef}
      fontSize={size}
      className={buttonClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonBase>
  );
};

export default Button;
