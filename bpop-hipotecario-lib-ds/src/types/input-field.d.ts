import { ChangeEventHandler, FocusEventHandler, FormEventHandler, MouseEventHandler, ReactNode } from "react";

import { Testable } from "./global";
import { WithTooltipIcon } from "./tooltip";

export declare type InputTextBaseSize = "md" | "lg";
export declare type InputTextBaseSpecialStatus = "success" | "warning" | "error";
export declare type InputFieldType = "text" | "tel";
export declare type validateInput = (value?: string | number) => boolean;

export declare interface InputBaseProps extends Testable {
  type?: string;
  name?: string;
  value?: string | number | readonly string[];
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
}

export declare interface InputTextBaseProps extends InputBaseProps {
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  size?: InputTextBaseSize;
  specialStatus?: InputTextBaseSpecialStatus;
  onInput?: FormEventHandler<HTMLInputElement>;
}

export declare interface InputTextFieldBaseProps
  extends Omit<InputTextBaseProps, "specialStatus" | "variant">,
    WithTooltipIcon {
  label: string;
  caption?: string;
  type?: InputFieldType;
  hasError?: boolean;
  validateInputValue?: validateInput;
}

export declare type TextFieldProps = Omit<InputTextFieldBaseProps, "type" | "onInput">;

export declare interface NumberFieldProps extends Omit<TextFieldProps, "validateInputValue"> {
  value?: number;
}

export declare interface ControlledInput extends InputBaseProps {
  checked?: boolean;
}

export declare interface RadioButtonProps extends ControlledInput {
  label: string;
  fullWidth?: boolean;
}

export declare interface CheckboxProps extends ControlledInput {
  hasError?: boolean;
}

export declare interface CheckboxFieldProps extends CheckboxProps {
  children: ReactNode;
  name: string;
}

export declare interface DateFieldProps extends Testable {
  caption?: string;
  hasError?: boolean;
  label?: string;
  value?: { day: number; month: number; year: number };
  disabled?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange: (v: { day: number; month: number; year: number }) => void;
}

export declare interface BooleanRadioFieldProps extends Testable, WithTooltipIcon {
  name: string;
  initialValue: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  labelText: string;
  falseValueLabel?: string;
  trueValueLabel?: string;
}
