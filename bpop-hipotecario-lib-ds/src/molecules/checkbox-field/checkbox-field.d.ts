import { HTMLPropsFor } from "../../types";

export interface CheckboxFieldProps extends HTMLPropsFor<"input"> {
  text: string;
  isDisabled?: boolean;
}
