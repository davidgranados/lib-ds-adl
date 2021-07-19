import classNames from "classnames";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

import { addClassToElement, removeClassFromElement } from "../../helpers";
import { InputRef, InputTextBaseProps } from "../../types";

import inputStyles from "./input-base.module.css";

const InputBase = forwardRef<InputRef, InputTextBaseProps>(
  ({ id, name, value, type, specialStatus, onFocus, onBlur, onInput, disabled, size = "lg", ...props }, ref) => {
    const inputClassName = classNames(inputStyles["default"], inputStyles[`size-${size}`], {
      [inputStyles["filled"]]: value,
      [inputStyles[`${specialStatus}`]]: specialStatus,
      [inputStyles["disabled"]]: disabled,
    });
    const inputRef = useRef<HTMLInputElement>(null);
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      addClassToElement(inputRef.current, inputStyles["focus"]);
      onFocus && onFocus(event);
    };

    useImperativeHandle(ref, () => ({
      get input() {
        return inputRef.current;
      },
    }));

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      removeClassFromElement(inputRef.current, inputStyles["focus"]);
      removeClassFromElement(inputRef.current, inputStyles["typing"]);
      if (inputRef.current?.value) {
        addClassToElement(inputRef.current, inputStyles["filled"]);
      } else {
        removeClassFromElement(inputRef.current, inputStyles["filled"]);
      }
      onBlur && onBlur(event);
    };
    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
      addClassToElement(inputRef.current, inputStyles["typing"]);
      onInput && onInput(event);
    };
    return (
      <input
        ref={inputRef}
        className={inputClassName}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleInput}
        value={value}
        disabled={disabled}
        type={type}
        id={id}
        name={name}
        {...props}
      />
    );
  }
);
InputBase.displayName = "InputBase";

export default InputBase;
