import { FocusEventHandler, ReactNode } from "react";
import { Testable } from "./global";

export declare type DropdownItems = { label: string; value: string | number }[];
export declare type DropdownOnChange = (v: string | number) => void;
export declare type DropdownValue = string | number;

export declare interface DropdownProps extends Testable {
  label: string;
  items: DropdownItems;
  disabled?: boolean;
  hasError?: boolean;
  caption?: string;
  placeholder?: string;
  value?: DropdownValue;
  tooltip?: ReactNode;
  onChange: DropdownOnChange;
  onFocus?: FocusEventHandler<HTMLDivElement>;
  onBlur?: FocusEventHandler<HTMLDivElement>;
}
