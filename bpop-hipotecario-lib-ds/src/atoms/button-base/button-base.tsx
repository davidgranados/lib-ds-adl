import classNames from "classnames";
import React, { forwardRef } from "react";

import { ButtonBaseProps } from "../../types";

import buttonBaseStyles from "./button-base.module.css";

const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      children,
      className,
      onClick,
      onChange,
      onBlur,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      onMouseDown,
      onMouseUp,
      onTouchStart,
      onTouchEnd,
      disabled,
      type = "button",
      fontSize = "md",
    },
    ref
  ) => {
    const buttonTextClassName = classNames(
      buttonBaseStyles["default"],
      buttonBaseStyles[`font-size-${fontSize}`],
      {
        [buttonBaseStyles["disabled"]]: disabled,
      },
      className
    );
    return (
      <button
        ref={ref}
        type={type}
        className={buttonTextClassName}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClick}
        onChange={onChange}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);
ButtonBase.displayName = "ButtonBase";

export default ButtonBase;
