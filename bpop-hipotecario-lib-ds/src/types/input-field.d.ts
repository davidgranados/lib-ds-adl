import { ChangeEventHandler, FocusEventHandler, FormEventHandler, MouseEventHandler } from "react";

export declare type InputBaseVariant = "fillable" | "hidden";
export declare type InputBaseSize = "md" | "lg";
export declare type InputBaseSpecialStatus = "success" | "warning" | "error";
export declare type InputFieldType = "text" | "tel";
export declare type validateInput = (value?: string | number) => boolean;

export declare interface InputBaseProps {
  id?: string;
  type?: string;
  name?: string;
  value?: string | number | readonly string[];
  placeholder?: string;
  variant?: InputBaseVariant;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  size?: InputBaseSize;
  specialStatus?: InputBaseSpecialStatus;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onInput?: FormEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
}

type HiddenInputPropsOmits =
  | "type"
  | "variant"
  | "placeholder"
  | "size"
  | "onInput"
  | "specialStatus"
  | "minLength"
  | "maxLength";

export declare interface HiddenInputProps extends Omit<InputBaseProps, HiddenInputPropsOmits> {
  hasError?: boolean;
}

export declare interface InputFieldBaseProps extends Omit<InputBaseProps, "specialStatus" | "variant"> {
  label: string;
  hasError?: boolean;
  caption?: string;
  type?: InputFieldType;
  validateInputValue?: validateInput;
}

export declare type TextFieldProps = Omit<InputFieldBaseProps, "type" | "onInput">;

export declare interface NumberFieldProps extends Omit<TextFieldProps, "validateInputValue"> {
  value?: number;
}

export declare interface HiddenInputFieldProps extends HiddenInputProps {
  label: string;
  isChecked?: boolean;
}

export declare interface DateFieldProps {
  id: string;
  caption?: string;
  hasError?: boolean;
  value?: { day: number; month: number; year: number };
  onChange: (v: { day: number; month: number; year: number }) => void;
}

export declare type InputRef = {
  input: HTMLInputElement | null;
};
