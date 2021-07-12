import { HTMLPropsFor } from "../../types";

export interface RadioFieldProps extends HTMLPropsFor<"input"> {
  id: string;
  text: string;
  isDisabled?: boolean;
}
