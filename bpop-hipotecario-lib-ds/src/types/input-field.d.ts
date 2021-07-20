import { ChangeEventHandler, FocusEventHandler, FormEventHandler, MouseEventHandler, ReactNode } from "react";

export declare type InputTextBaseSize = "md" | "lg";
export declare type InputTextBaseSpecialStatus = "success" | "warning" | "error";
export declare type InputFieldType = "text" | "tel";
export declare type validateInput = (value?: string | number) => boolean;

export declare interface InputBaseProps {
  id?: string;
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

export declare interface InputTextFieldBaseProps extends Omit<InputTextBaseProps, "specialStatus" | "variant"> {
  label: string;
  hasError?: boolean;
  caption?: string;
  type?: InputFieldType;
  validateInputValue?: validateInput;
}

export declare type TextFieldProps = Omit<InputTextFieldBaseProps, "type" | "onInput">;

export declare interface NumberFieldProps extends Omit<TextFieldProps, "validateInputValue"> {
  value?: number;
}

export declare interface RadioButtonProps extends InputBaseProps {
  label: string;
}

export declare interface CheckboxProps extends InputBaseProps {
  hasError?: boolean;
}

export declare interface CheckboxFieldProps extends InputBaseProps {
  children: ReactNode;
}

export declare interface DateFieldProps {
  id: string;
  caption?: string;
  hasError?: boolean;
  value?: { day: number; month: number; year: number };
  disabled?: boolean;
  onChange: (v: { day: number; month: number; year: number }) => void;
}
