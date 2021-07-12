import { ButtonVariant } from "../../types";
import { ButtonSize } from "./index";
import { ButtonFontSize } from "../button-base";

export const validSizes: ButtonSize[] = ["xs", "sm", "md", "lg"];
export const validVariants: ButtonVariant[] = ["primary", "secondary"];
export const fontSizeMapping: Record<ButtonSize, ButtonFontSize> = {
  xs: "sm",
  sm: "md",
  md: "md",
  lg: "lg",
};
