import { Testable } from "./global";

export declare interface ConfirmModalProps extends Testable {
  title: string;
  description?: string;
  show: boolean;
  mainButtonText?: string;
  secondaryButtonText?: string;
  onMainButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  onToggle?: (state: boolean) => void;
}
