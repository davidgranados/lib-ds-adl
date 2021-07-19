import classNames from "classnames";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

import { addClassToElement, removeClassFromElement } from "../../helpers";
import { InputBaseProps, InputRef } from "../../types";

import inputStyles from "./input-base.module.css";

const InputBase = forwardRef<InputRef, InputBaseProps>(
  (
    {
      id,
      name,
      value,
      type,
      specialStatus,
      onFocus,
      onBlur,
      onInput,
      disabled,
      variant = "fillable",
      size = "lg",
      ...props
    },
    ref
  ) => {
    const isFillable = variant === "fillable";
    const isHidden = variant === "hidden";
    const inputClassName = classNames({
      [inputStyles["fillable"]]: isFillable,
      [inputStyles[`size-${size}`]]: isFillable,
      [inputStyles["filled"]]: isFillable && value,
      [inputStyles["hidden"]]: isHidden,
      [inputStyles[`${specialStatus}`]]: !isHidden && specialStatus,
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
      removeClassFromElement(inputRef.current, inputStyles["typing"], isFillable);
      if (inputRef.current?.value) {
        addClassToElement(inputRef.current, inputStyles["filled"], isFillable);
      } else {
        removeClassFromElement(inputRef.current, inputStyles["filled"], isFillable);
      }
      onBlur && onBlur(event);
    };
    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
      isFillable && addClassToElement(inputRef.current, inputStyles["typing"], isFillable);
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
