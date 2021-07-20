import { ReactNode } from "react";

export declare type InputFieldCaptionStatus = "default" | "error" | "warning" | "success";

export declare interface InputFieldCaptionProps {
  children: ReactNode;
  status?: InputFieldCaptionStatus;
}
