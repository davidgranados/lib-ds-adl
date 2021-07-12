import classNames from "classnames";
import React from "react";

import { defaultVariantMapping } from "./helpers";
import { TypographyProps } from "./typography.d";
import typographyStyles from "./typography.module.css";

const Typography: React.FC<TypographyProps> = ({
  variant,
  component,
  children,
  color,
  status,
  lineHeight,
  weight = "regular",
}) => {
  let fontColor = "carbon-900";
  if (status) {
    fontColor = `${status}-600`;
  } else if (color) {
    fontColor = color;
  }
  const textClassName = classNames(
    typographyStyles["default"],
    typographyStyles[variant],
    typographyStyles[`weight-${weight}`],
    typographyStyles[fontColor],
    {
      [typographyStyles[`line-height-${lineHeight}`]]: lineHeight,
    }
  );
  const Tag = `${component || defaultVariantMapping[variant]}` as keyof JSX.IntrinsicElements;
  return <Tag className={textClassName}>{children}</Tag>;
};

export default Typography;
