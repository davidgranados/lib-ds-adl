import classNames from "classnames";
import React, { forwardRef, useRef } from "react";

import { addClassToElement, removeClassFromElement } from "../../helpers";
import { useCombinedRefs } from "../../hooks";

import { InputBaseProps } from "./input-base.d";
import inputStyles from "./input-base.module.css";

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ onFocus, onBlur, onInput, status, disabled, value, size = "md", ...props }, ref) => {
    const inputClassName = classNames(inputStyles["default"], inputStyles[`size-${size}`], {
      [inputStyles[`${status}`]]: status,
      [inputStyles["disabled"]]: disabled,
      [inputStyles["filled"]]: value,
    });
    const innerInputRef = useRef(null);
    const combinedRef = useCombinedRefs<HTMLInputElement>([ref, innerInputRef]);
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      addClassToElement(combinedRef.current, inputStyles["focus"]);
      onFocus && onFocus(event);
    };
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      removeClassFromElement(combinedRef.current, inputStyles["focus"]);
      removeClassFromElement(combinedRef.current, inputStyles["typing"]);
      if (combinedRef.current?.value) {
        addClassToElement(combinedRef.current, inputStyles["filled"]);
      } else {
        removeClassFromElement(combinedRef.current, inputStyles["filled"]);
      }
      onBlur && onBlur(event);
    };
    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
      addClassToElement(combinedRef.current, inputStyles["typing"]);
      onInput && onInput(event);
    };
    return (
      <input
        ref={combinedRef}
        className={inputClassName}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleInput}
        value={value}
        {...props}
        disabled={disabled}
      />
    );
  }
);
InputBase.displayName = "InputBase";

export default InputBase;
