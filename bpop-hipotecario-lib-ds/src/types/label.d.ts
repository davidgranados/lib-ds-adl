import { MouseEventHandler, ReactNode } from "react";
import { Testable } from "./global";

export declare interface InputFieldLabelProps extends Testable {
  htmlFor?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLLabelElement>;
}
