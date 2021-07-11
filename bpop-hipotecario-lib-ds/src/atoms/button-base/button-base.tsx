import classNames from "classnames";
import React, { forwardRef } from "react";

import { ButtonBaseProps } from "./button-base.d";
import buttonBaseStyles from "./button-base.module.css";

const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ children, className, type = "button", fontSize = "md", ...props }, ref) => {
    const buttonTextClassName = classNames(
      buttonBaseStyles["default"],
      buttonBaseStyles[`font-size-${fontSize}`],
      className
    );
    return (
      <button ref={ref} type={type} className={buttonTextClassName} {...props}>
        {children}
      </button>
    );
  }
);
ButtonBase.displayName = "ButtonBase";

export default ButtonBase;
