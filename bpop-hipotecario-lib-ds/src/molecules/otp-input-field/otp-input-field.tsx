import classNames from "classnames";
import React, { ChangeEvent, KeyboardEvent, FC, useState, useRef, useEffect } from "react";

import { OtpInput } from "../../atoms/otp-input";
import { InputFieldCaptionStatus, OtpInputFieldProps } from "../../types";
import { InputFieldCaption } from "../../atoms/input-field-caption";
import { addClassToElement, getId, getSuffixedId, removeClassFromElement } from "../../helpers";

import inputTextBaseStyles from "../../atoms/input-text-base/input-text-base.module.css";
import styles from "./otp-input-field.module.css";

const OtpInputField: FC<OtpInputFieldProps> = ({
  onChange,
  dataTestId,
  caption,
  id = "opt-input-field",
  numInputs = 6,
  hasError = false,
  disabled = false,
  value = "",
}) => {
  const captionStatus: InputFieldCaptionStatus = hasError ? "error" : "default";
  const inputsWrapperClassName = classNames(styles["inputs-wrapper"], {
    [styles["inputs-wrapper-enabled"]]: !hasError && !disabled,
    [inputTextBaseStyles["error"]]: hasError,
    [inputTextBaseStyles["disabled"]]: disabled,
  });
  const inputsWrapperRef = useRef<HTMLDivElement>(null);
  const [activeInput, setActiveInput] = useState(0);
  const [otp, setOtp] = useState(value ? value.toString().split("") : []);
  // Helper to return OTP from input
  const handleOtpChange = (otp: string[]) => {
    const otpValue = otp.join("");
    onChange && onChange(otpValue);
  };
  const isInputValueValid = (value: string): boolean => {
    const isTypeValid = !isNaN(parseInt(value, 10));
    return isTypeValid && value.trim().length === 1;
  };
  // Focus on input by index
  const focusInput = (index: number) => {
    const activeInput = Math.max(Math.min(numInputs - 1, index), 0);
    setActiveInput(activeInput);
  };
  // Focus on next input
  const focusNextInput = () => {
    focusInput(activeInput + 1);
  };
  // Focus on previous input
  const focusPrevInput = () => {
    focusInput(activeInput - 1);
  };
  const handleFilledState = (otp: string[]) => {
    if (otp.length) {
      addClassToElement(inputsWrapperRef.current, inputTextBaseStyles["filled"]);
    } else {
      removeClassFromElement(inputsWrapperRef.current, inputTextBaseStyles["filled"]);
    }
  };
  // Change OTP value at focused input
  const changeCodeAtFocus = (value: string) => {
    setOtp((prevOtp) => {
      if (value) {
        prevOtp[activeInput] = value[0];
      } else {
        prevOtp[activeInput] = "";
      }
      const newOtp = prevOtp.slice();
      handleOtpChange(newOtp);
      return newOtp;
    });
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (isInputValueValid(value)) {
      changeCodeAtFocus(value);
    }
  };
  // Handle cases of backspace, delete, left arrow, right arrow, space
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      changeCodeAtFocus("");
      focusPrevInput();
    } else if (event.key === "Delete") {
      event.preventDefault();
      changeCodeAtFocus("");
      focusNextInput();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusPrevInput();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      focusNextInput();
    } else if (event.key === " " || event.key === "Spacebar" || event.key === "Space") {
      event.preventDefault();
    }
  };
  // The content may not have changed, but some input took place hence change the focus
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (isInputValueValid(event.target.value)) {
      focusNextInput();
    }
  };
  const handleFocus = (index: number) => {
    return () => {
      setActiveInput(index);
    };
  };
  const handleBlur = () => {
    setActiveInput(-1);
  };
  const getInputsProps = () => {
    const inputsProps = [];
    for (let i = 0; i < numInputs; i++) {
      inputsProps.push({
        key: i,
        value: otp && otp[i],
        focus: activeInput === i,
        disabled: disabled,
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        onInput: handleInput,
        onFocus: handleFocus(i),
        onBlur: handleBlur,
      });
    }
    return inputsProps;
  };
  useEffect(() => {
    handleFilledState(otp);
  }, [otp]);
  return (
    <div {...getId(id, dataTestId)} className={styles["wrapper"]}>
      <div ref={inputsWrapperRef} className={inputsWrapperClassName}>
        {getInputsProps().map(({ key, ...inputProps }) => (
          <div key={`item-${key}`} {...getSuffixedId(id, `item-wrapper-${key}`, dataTestId)}>
            <OtpInput {...getSuffixedId(id, `item-${key}`, dataTestId)} {...inputProps} />
          </div>
        ))}
      </div>
      {caption && (
        <InputFieldCaption {...getSuffixedId(id, "caption", dataTestId, true)} status={captionStatus}>
          {caption}
        </InputFieldCaption>
      )}
    </div>
  );
};

export default OtpInputField;
