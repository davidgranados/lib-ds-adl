import { HTMLPropsFor } from "../../types";

export type InputBaseSize = "md" | "lg";
export type InputBaseStatus = "success" | "warning" | "error";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export interface InputBaseProps extends HTMLPropsFor<"input"> {
  size?: InputBaseSize;
  status?: InputBaseStatus;
}
