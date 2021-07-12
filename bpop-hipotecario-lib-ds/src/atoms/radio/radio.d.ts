import { HTMLPropsFor } from "../../types";

export interface RadioProps extends HTMLPropsFor<"input"> {
  id: string;
  hasError?: boolean;
  isDisabled?: boolean;
}
