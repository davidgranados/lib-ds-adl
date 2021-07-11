import { DefaultButtonProps } from "../../types/button";
import { ButtonBaseProps } from "../button-base";
import { HTMLPropsFor } from "../../types";

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export interface ButtonProps extends DefaultButtonProps, ButtonBaseProps, HTMLPropsFor<"button"> {
  size?: ButtonSize;
}
