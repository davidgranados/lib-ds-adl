import { MouseEventHandler } from "react";

import { TypographyLineHeight, TypographyWeight } from "../types";

export declare type LabelVariant = "input-field-base" | "radio-field" | "checkbox-field";

export declare interface LabelProps {
  htmlFor?: string;
  variant?: LabelVariant;
  fontWeight?: TypographyWeight;
  lineHeight?: TypographyLineHeight;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLLabelElement>;
}
