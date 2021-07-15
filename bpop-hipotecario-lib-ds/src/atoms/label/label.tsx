import classNames from "classnames";
import React, { forwardRef } from "react";

import { LabelProps } from "../../types";
import { Typography } from "../typography";

import labelStyles from "./label.module.css";

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, variant, htmlFor, fontWeight, lineHeight }, ref) => {
    const labelClassName = classNames(labelStyles["default"], { [labelStyles[`${variant}`]]: variant });
    return (
      <label ref={ref} className={labelClassName} htmlFor={htmlFor}>
        <Typography
          data-testid={"span-inside-label"}
          variant={"body-sm"}
          component={"span"}
          weight={fontWeight}
          lineHeight={lineHeight}
        >
          {children}
        </Typography>
      </label>
    );
  }
);
export default Label;
