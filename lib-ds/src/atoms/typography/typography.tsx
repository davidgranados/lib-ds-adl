import React from "react";
import classNames from "classnames";

import { TypographyProps, TypographyJSXElements, VariantMappingType } from ".";

import typographyStyles from "./typography.module.css";

const defaultVariantMapping: VariantMappingType = {
  overline: "span",
  caption: "span",
  "body-sm": "p",
  "body-md": "p",
  "body-lg": "p",
  "subtitle-md": "h6",
  "subtitle-lg": "h6",
  h6: "h6",
  h5: "h5",
  h4: "h4",
  h3: "h3",
  h2: "h2",
  h1: "h1",
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  component,
  children,
  color = "carbon-900",
  weight = "regular",
  ...props
}) => {
  const textClassName = classNames(
    typographyStyles["default"],
    typographyStyles[variant],
    typographyStyles[color],
    typographyStyles[`weight-${weight}`]
  );
  const Tag = `${component || defaultVariantMapping[variant]}` as keyof TypographyJSXElements;
  return (
    <Tag className={textClassName} {...props}>
      {children}
    </Tag>
  );
};
