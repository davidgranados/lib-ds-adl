import classNames from "classnames";
import React, { FC, useRef } from "react";

import { addClassToElement, getId, removeClassFromElement } from "../../helpers";
import { InputTextBaseProps } from "../../types";

import styles from "./input-text-base.module.css";

const InputTextBase: FC<InputTextBaseProps> = ({
  name,
  value,
  type,
  specialStatus,
  onBlur,
  onInput,
  disabled,
  dataTestId,
  id = "input-text-base",
  size = "lg",
  ...props
}) => {
  const inputClassName = classNames(styles["default"], styles[`size-${size}`], {
    [styles["filled"]]: value,
    [styles[`${specialStatus}`]]: specialStatus,
    [styles["disabled"]]: disabled,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    addClassToElement(inputRef.current, styles["typing"]);
    onInput && onInput(event);
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    removeClassFromElement(inputRef.current, styles["typing"]);
    if (inputRef.current?.value) {
      addClassToElement(inputRef.current, styles["filled"]);
    } else {
      removeClassFromElement(inputRef.current, styles["filled"]);
    }
    onBlur && onBlur(event);
  };
  return (
    <input
      {...getId(id, dataTestId)}
      name={name}
      type={type}
      ref={inputRef}
      className={inputClassName}
      value={value}
      disabled={disabled}
      onBlur={handleBlur}
      onInput={handleInput}
      {...props}
    />
  );
};
InputTextBase.displayName = "InputTextBase";

export default InputTextBase;
