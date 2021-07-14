import { ButtonBaseProps } from "../atoms/button-base";

export type ButtonVariant = "primary" | "secondary";

export interface DefaultButtonProps extends ButtonBaseProps {
  text: string;
  variant: ButtonVariant;
}
