import { HTMLPropsFor } from "../../types";

export type InputBaseSize = "md" | "lg";
export type InputBaseStatus = "success" | "warning" | "error";

export interface InputBaseProps extends HTMLPropsFor<"input"> {
  size?: InputBaseSize;
  status?: InputBaseStatus;
}
