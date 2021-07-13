import { ChangeEventHandler, FocusEventHandler, FormEventHandler } from "react";

import { InputBaseSize, InputBaseStatus } from "../../atoms/input-base";
import { TypographyStatus } from "../../atoms/typography";

export type InputFieldType = "text" | "tel";
export type validateInput = (value?: string | number) => boolean;

export interface InputFieldBaseProps {
  id: string;
  label: string;
  type?: InputFieldType;
  value?: string | number;
  status?: InputBaseStatus | TypographyStatus;
  caption?: string;
  placeholder?: string;
  size?: InputBaseSize;
  maxLength?: number;
  disabled?: boolean;
  validateInputValue?: validateInput;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onInput?: FormEventHandler<HTMLInputElement>;
}
