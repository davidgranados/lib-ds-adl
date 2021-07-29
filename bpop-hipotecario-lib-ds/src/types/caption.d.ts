import { ReactNode } from "react";
import { Testable } from "./global";

export declare type InputFieldCaptionStatus = "default" | "error" | "warning" | "success";

export declare interface InputFieldCaptionProps extends Testable {
  children: ReactNode;
  status?: InputFieldCaptionStatus;
}
