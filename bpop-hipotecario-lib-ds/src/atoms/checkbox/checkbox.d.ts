import { HTMLPropsFor } from "../../types";

export interface CheckboxProps extends HTMLPropsFor<"input"> {
  hasError?: boolean;
  isDisabled?: boolean;
}
