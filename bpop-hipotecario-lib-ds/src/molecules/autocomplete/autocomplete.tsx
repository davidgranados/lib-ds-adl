import React, { FC, ReactNode, useState } from "react";

import { InputFieldCaptionStatus, InputTextBaseProps } from "../..";
import { InputFieldCaption } from "../../atoms/input-field-caption";
import { InputFieldLabel } from "../../atoms/input-field-label";
import { InputTextBase } from "../../atoms/input-text-base";

import styles from "./autocomplete.module.css";

export const MIN_CHARACTERS_TO_SEARCH = 3;

export interface AutocompleteProps extends Omit<InputTextBaseProps, "onChange" | "onBlur" | "onInput"> {
  items: { label: string; value: string }[];
  label?: string;
  value?: string;
  caption?: string;
  isLoading?: boolean;
  hasError?: boolean;
  tooltip?: ReactNode;
  onChange: (item: { label: string; value: string }) => void;
  onBlur?: () => void;
  onInput?: (value: string) => void;
}

const Autocomplete: FC<AutocompleteProps> = ({
  name,
  value = "",
  type,
  items,
  specialStatus,
  onBlur,
  onChange,
  disabled,
  dataTestId,
  label,
  caption,
  hasError,
  tooltip,
  id = "input-autocomplete",
  size = "lg",
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [searchValue, setSearchValue] = useState(value);
  const [hasFocus, setHasFocus] = useState(false);
  const captionStatus: InputFieldCaptionStatus = hasError ? "error" : "default";

  const filteredItems = () => {
    return items.filter((i) => i.label.toLowerCase().includes(searchValue.toLowerCase()));
  };

  const handleChange = (e: { label: string; value: string }) => {
    setSearchValue(e.label);
    setSelectedValue(e.value);
    setHasFocus(false);
    onChange && onChange(e);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleFocus = () => {
    setHasFocus(true);
  };

  const handleMainBlur = () => {
    !disabled && setHasFocus(false);
    onBlur && onBlur();
  };

  const isSelected = (v: string | number) => v === selectedValue;

  return (
    <div className={styles.wrapper} tabIndex={0} onFocus={handleFocus} onBlur={handleMainBlur}>
      <InputFieldLabel htmlFor={id}>{label}</InputFieldLabel>
      {tooltip}
      <InputTextBase
        id={id}
        name={name}
        type={type}
        size={size}
        value={searchValue}
        onChange={handleInput}
        disabled={disabled}
        dataTestId={dataTestId}
        specialStatus={specialStatus}
      />
      <div data-testid="expanded-section" className={`${styles["expanded-section"]} ${hasFocus && styles["open"]}`}>
        <div className={`${styles["expanded-content"]}`}>
          {searchValue.length < MIN_CHARACTERS_TO_SEARCH ? (
            <div data-testid="minimum-search" className={`${styles.item} ${styles["minimum-search"]}`}>
              <span className={`${styles["name"]}`}>Digita por lo menos {MIN_CHARACTERS_TO_SEARCH} caracteres</span>
            </div>
          ) : filteredItems().length ? (
            filteredItems().map((i) => (
              <div
                data-testid={`${id}-ac-item-${i.label}`}
                key={`${id}-ac-item-${i.label}`}
                className={styles["item"]}
                onClick={() => handleChange(i)}
              >
                <span className={`${styles["name"]} ${isSelected(i.value) && styles["selected"]}`}>{i.label}</span>
              </div>
            ))
          ) : (
            <div data-testid="no-results" className={`${styles.item} ${styles["no-results"]}`}>
              <span className={`${styles["name"]}`}>No hay resultados</span>
            </div>
          )}
        </div>
      </div>
      {caption && <InputFieldCaption status={captionStatus}>{caption}</InputFieldCaption>}
    </div>
  );
};

export default Autocomplete;
