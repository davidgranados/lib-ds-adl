import { ReactNode } from "react";
import { Testable } from "./global";

export interface AlertBadgeProps extends Testable {
  children?: ReactNode;
  type?: "info" | "warning" | "success" | "danger";
}
