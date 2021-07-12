import { ChangeEventHandler, FocusEventHandler, FormEventHandler } from "react";

import { InputBaseSize, InputBaseStatus } from "../../atoms/input-base";
import { TypographyStatus } from "../../atoms/typography";

export interface DefaultFieldProps {
  id: string;
  label: string;
  value?: string | number;
  status?: InputBaseStatus | TypographyStatus;
  caption?: string;
  placeholder?: string;
  size?: InputBaseSize;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onInput?: FormEventHandler<HTMLInputElement>;
}
