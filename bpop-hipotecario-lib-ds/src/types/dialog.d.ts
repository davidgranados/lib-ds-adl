import { Testable } from "./global";

export declare interface DialogProps extends Testable {
  show: boolean;
  width?: number;
  onToggle?: (state: boolean) => void;
}
