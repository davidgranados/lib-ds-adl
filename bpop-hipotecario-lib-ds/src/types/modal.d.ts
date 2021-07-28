import { Testable } from "./global";

export declare interface ModalProps extends Testable {
  title: string;
  show: boolean;
  buttonText?: string;
  isDisabledButton?: boolean;
  onToggle?: (state: boolean) => void;
}
