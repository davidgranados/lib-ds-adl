import { InputFieldBaseProps } from "../input-field-base";

export type TextFieldProps = Omit<InputFieldBaseProps, "type" | "onInput">;
