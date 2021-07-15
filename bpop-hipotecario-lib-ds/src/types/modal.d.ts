export declare interface ModalProps {
  title: string;
  show: boolean;
  buttonText?: string;
  isDisabledButton?: boolean;
  onToggle?: (state: boolean) => void;
}
