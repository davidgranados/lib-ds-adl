import { ButtonFontSize, ButtonSize, ButtonVariant } from "../../types";

export const validSizes: ButtonSize[] = ["xs", "sm", "md", "lg"];
export const validVariants: ButtonVariant[] = ["primary", "secondary"];
export const fontSizeMapping: Record<ButtonSize, ButtonFontSize> = {
  xs: "sm",
  sm: "md",
  md: "md",
  lg: "lg",
};
