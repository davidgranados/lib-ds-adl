import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler } from "react";

import { Testable } from "./global";

export declare interface OtpInputProps extends Testable {
  focus: boolean;
  disabled: boolean;
  value?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onInput?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

export declare interface OtpInputFieldProps extends Testable {
  onChange?: (otp: string) => unknown;
  numInputs?: number;
  hasError?: boolean;
  caption?: string;
  disabled?: boolean;
  value?: string;
}
