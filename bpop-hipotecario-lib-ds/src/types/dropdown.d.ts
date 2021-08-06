import { Testable } from "./global";

export declare interface DropdownProps extends Testable {
  label: string;
  items: { label: string; value: string | number }[];
  disabled?: boolean;
  hasError?: boolean;
  caption?: string;
  placeholder?: string;
  value?: string | number;
  onChange: (v: string | number) => void;
}
