import { HTMLPropsFor } from "../../types";

export type ButtonFontSize = "xs" | "sm" | "md" | "lg";

export interface ButtonBaseProps extends HTMLPropsFor<"button"> {
  fontSize?: ButtonFontSize;
}
