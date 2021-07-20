import { MouseEventHandler, ReactNode } from "react";

export declare interface InputFieldLabelProps {
  htmlFor?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLLabelElement>;
}
