import { DefaultButtonProps } from "../../types/button";

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export interface ButtonProps extends DefaultButtonProps {
  size?: ButtonSize;
}
