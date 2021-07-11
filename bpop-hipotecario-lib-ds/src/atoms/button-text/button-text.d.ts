import { DefaultButtonProps } from "../../types/button";
import { ButtonBaseProps } from "../button-base";
import { HTMLPropsFor } from "../../types";

export type ButtonTextSize = "sm" | "md" | "lg";

export interface ButtonTextProps extends DefaultButtonProps, ButtonBaseProps, HTMLPropsFor<"button"> {
  size?: ButtonTextSize;
}
