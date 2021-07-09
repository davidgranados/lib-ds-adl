import { DefaultButtonProps } from "../../types/button";

export type ButtonTextSize = "sm" | "md" | "lg";

export interface ButtonTextProps extends DefaultButtonProps {
  size?: ButtonTextSize;
}
