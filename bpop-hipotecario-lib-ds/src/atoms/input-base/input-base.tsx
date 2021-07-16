import classNames from "classnames";
import React, { forwardRef, useRef } from "react";

import { addClassToElement, removeClassFromElement } from "../../helpers";
import { useCombinedRefs } from "../../hooks";
import { InputBaseProps } from "../../types";

import inputStyles from "./input-base.module.css";

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      id,
      name,
      type,
      specialStatus,
      disabled,
      value,
      placeholder,
      hidden,
      maxLength,
      minLength,
      onFocus,
      onBlur,
      onInput,
      onChange,
      onClick,
      fillable = true,
      size = "lg",
    },
    ref
  ) => {
    const inputClassName = classNames({
      [inputStyles["fillable"]]: fillable,
      [inputStyles[`size-${size}`]]: fillable,
      [inputStyles["filled"]]: fillable && value,
      [inputStyles["hidden"]]: hidden,
      [inputStyles[`${specialStatus}`]]: !hidden && specialStatus,
      [inputStyles["disabled"]]: disabled,
    });
    const innerInputRef = useRef(null);
    const combinedRef = useCombinedRefs<HTMLInputElement>([ref, innerInputRef]);
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      addClassToElement(combinedRef.current, inputStyles["focus"]);
      onFocus && onFocus(event);
    };
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      removeClassFromElement(combinedRef.current, inputStyles["focus"]);
      removeClassFromElement(combinedRef.current, inputStyles["typing"], fillable);
      if (combinedRef.current?.value) {
        addClassToElement(combinedRef.current, inputStyles["filled"], fillable);
      } else {
        removeClassFromElement(combinedRef.current, inputStyles["filled"], fillable);
      }
      onBlur && onBlur(event);
    };
    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
      fillable && addClassToElement(combinedRef.current, inputStyles["typing"], fillable);
      onInput && onInput(event);
    };
    return (
      <input
        ref={combinedRef}
        type={type}
        id={id}
        name={name}
        className={inputClassName}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleInput}
        onChange={onChange}
        onClick={onClick}
        disabled={disabled}
      />
    );
  }
);
InputBase.displayName = "InputBase";

export default InputBase;
