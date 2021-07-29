import { Testable } from "./global";

export declare interface DropdownProps extends Testable {
  label: string;
  items: { label: string; value: string | number }[];
  wrapperId?: string;
  wrapperDataTestId?: string;
  labelId?: string;
  labelDataTestId?: string;
  captionId?: string;
  captionDataTestId?: string;
  disabled?: boolean;
  hasError?: boolean;
  caption?: string;
  placeholder?: string;
  value?: string | number;
  onChange: (v: string | number) => void;
}
