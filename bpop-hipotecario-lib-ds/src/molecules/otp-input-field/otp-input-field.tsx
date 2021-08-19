import classNames from "classnames";
import React, { ChangeEvent, KeyboardEvent, FC, useState, useRef, useEffect, useMemo, useCallback } from "react";

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

  const isInputValueValid = (value: string): boolean => {
    const isTypeValid = !isNaN(parseInt(value, 10));
    return isTypeValid && value.trim().length === 1;
  };

  // Focus on input by index
  const focusInput = useCallback(
    (index: number) => {
      const activeInput = Math.max(Math.min(numInputs - 1, index), 0);
      setActiveInput(activeInput);
    },
    [numInputs]
  );
  // Focus on next input
  const focusNextInput = useCallback(() => {
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]);
  // Focus on previous input
  const focusPrevInput = useCallback(() => {
    focusInput(activeInput - 1);
  }, [activeInput, focusInput]);
  const handleFilledState = useCallback((otp: string[]) => {
    if (otp.length) {
      addClassToElement(inputsWrapperRef.current, inputTextBaseStyles["filled"]);
    } else {
      removeClassFromElement(inputsWrapperRef.current, inputTextBaseStyles["filled"]);
    }
  }, []);
  // Change OTP value at focused input
  const changeCodeAtFocusedInput = useCallback(
    (value: string) => {
      setOtp((prevOtp) => {
        const newOtp = prevOtp.slice();
        if (value) {
          newOtp[activeInput] = value[0];
        } else {
          newOtp[activeInput] = "";
        }
        return newOtp;
      });
    },
    [activeInput]
  );
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (isInputValueValid(value)) {
        changeCodeAtFocusedInput(value);
      }
    },
    [changeCodeAtFocusedInput]
  );
  // Handle cases of backspace, delete, left arrow, right arrow, space
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Backspace") {
        event.preventDefault();
        changeCodeAtFocusedInput("");
        focusPrevInput();
      } else if (event.key === "Delete") {
        event.preventDefault();
        changeCodeAtFocusedInput("");
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
    },
    [changeCodeAtFocusedInput, focusNextInput, focusPrevInput]
  );
  // The content may not have changed, but some input took place hence change the focus
  const handleInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (isInputValueValid(event.target.value)) {
        focusNextInput();
      }
    },
    [focusNextInput]
  );
  const handleFocus = (index: number) => {
    return () => {
      setActiveInput(index);
    };
  };

  useEffect(() => {
    handleFilledState(otp);
    onChange && onChange(otp.join(""));
  }, [handleFilledState, onChange, otp]);

  const renderInputs = useMemo(() => {
    const inputs = [];
    for (let i = 0; i < numInputs; i++) {
      inputs.push(
        <div key={`item-${i}`} {...getSuffixedId(id, `item-wrapper-${i}`, dataTestId)}>
          <OtpInput
            {...getSuffixedId(id, `item-${i}`, dataTestId)}
            value={otp && otp[i]}
            focus={activeInput === i}
            disabled={disabled}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
            onFocus={handleFocus(i)}
          />
        </div>
      );
    }
    return inputs;
  }, [activeInput, dataTestId, disabled, handleChange, handleInput, handleKeyDown, id, numInputs, otp]);
  return (
    <div {...getId(id, dataTestId)} className={styles["wrapper"]}>
      <div ref={inputsWrapperRef} className={inputsWrapperClassName}>
        {renderInputs}
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
