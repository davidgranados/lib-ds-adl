import { ChangeEventHandler, FocusEventHandler, MouseEventHandler, ReactNode, TouchEventHandler } from "react";

export declare type ButtonVariant = "primary" | "secondary";
export declare type ButtonFontSize = "sm" | "md" | "lg";
export declare type ButtonSize = "xs" | "sm" | "md" | "lg";
export declare type ButtonTextSize = "sm" | "md" | "lg";

export declare interface ButtonBaseProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  fontSize?: ButtonFontSize;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onChange?: ChangeEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  onMouseUp?: MouseEventHandler<HTMLButtonElement>;
  onTouchStart?: TouchEventHandler<HTMLButtonElement>;
  onTouchEnd?: TouchEventHandler<HTMLButtonElement>;
}

export declare interface DefaultButtonProps extends ButtonBaseProps {
  text: string;
  variant: ButtonVariant;
}

export declare interface ButtonProps extends DefaultButtonProps {
  size?: ButtonSize;
}

export declare interface ButtonTextProps extends DefaultButtonProps {
  size?: ButtonTextSize;
}
