import classNames from "classnames";
import React, { FC, FocusEvent, MouseEvent, TouchEvent, useRef } from "react";

import { addClassToElement, removeClassFromElement } from "../../helpers";
import { ButtonBase } from "../button-base";
import { ButtonProps } from "../../types";

import { fontSizeMapping } from "./helpers";
import buttonStyles from "./button.module.css";

const Button: FC<ButtonProps> = ({
  text,
  type,
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
  const fontSize = fontSizeMapping[size];

  const addActiveClass = () => {
    addClassToElement(buttonRef.current, buttonStyles[`${variant}--active`]);
  };
  const removeActiveClass = () => {
    removeClassFromElement(buttonRef.current, buttonStyles[`${variant}--active`]);
  };
  const handleMouseEnter = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    addClassToElement(buttonRef.current, buttonStyles[`${variant}--hover`]);
    onMouseEnter && onMouseEnter(event);
  };
  const handleMouseLeave = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    removeClassFromElement(buttonRef.current, buttonStyles[`${variant}--hover`]);
    onMouseLeave && onMouseLeave(event);
  };
  const handleMouseDown = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    addActiveClass();
    onMouseDown && onMouseDown(event);
  };
  const handleMouseUp = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    removeActiveClass();
    onMouseUp && onMouseUp(event);
  };
  const handleTouchStart = (event: TouchEvent<HTMLButtonElement>) => {
    addActiveClass();
    onTouchStart && onTouchStart(event);
  };
  const handleTouchEnd = (event: TouchEvent<HTMLButtonElement>) => {
    removeActiveClass();
    onTouchEnd && onTouchEnd(event);
  };
  const handleFocus = (event: FocusEvent<HTMLButtonElement>) => {
    addClassToElement(buttonRef.current, buttonStyles[`${variant}--focus`]);
    onFocus && onFocus(event);
  };
  const handleBlur = (event: FocusEvent<HTMLButtonElement>) => {
    removeClassFromElement(buttonRef.current, buttonStyles[`${variant}--focus`]);
    onBlur && onBlur(event);
  };

  return (
    <ButtonBase
      ref={buttonRef}
      type={type}
      fontSize={fontSize}
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
