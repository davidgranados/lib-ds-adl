import { HTMLPropsFor } from "./component";

export type ButtonVariant = "primary" | "secondary";
export type ButtonTextSize = "sm" | "md" | "lg";
export type ButtonSize = "xs" | ButtonTextSize;

export interface DefaultButtonProps extends HTMLPropsFor<"button"> {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ButtonProps extends DefaultButtonProps {
  size?: ButtonSize;
}

export interface ButtonTextProps extends DefaultButtonProps {
  size?: ButtonTextSize;
}
