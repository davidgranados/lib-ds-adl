import { TextFieldProps } from "../text-field";

export interface NumberFieldProps extends Omit<TextFieldProps, "validateInputValue"> {
  value?: number;
}
