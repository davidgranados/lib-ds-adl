import React, { useState } from "react";

import { DropdownProps } from "../../types";
import { getId, getSuffixedId } from "../../helpers";
import { InputFieldLabel } from "../../atoms/input-field-label";
import { InputFieldCaption } from "../../atoms/input-field-caption";
import { Icon } from "../../atoms/icon";

import styles from "./dropdown.module.css";

const Dropdown: React.FC<DropdownProps> = ({
  label,
  disabled,
  items,
  hasError,
  caption,
  placeholder,
  value,
  dataTestId,
  onChange,
  id = "dropdown-element",
}) => {
  const [open, setOpen] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const captionStatus = hasError ? "error" : undefined;

  const isSelected = (v: string | number) => v === selectedValue;
  const toggleOpen = () => !disabled && setOpen(!open);
  const selectedLabel = () => items.find((v) => v.value === selectedValue)?.label;
  const selectValue = (item: { label: string; value: string | number }) => {
    setIsFilled(true);
    setSelectedValue(item.value);
    onChange(item.value);
  };

  return (
    <div {...getSuffixedId(id, "wrapper", dataTestId)} className={styles["wrapper"]}>
      <InputFieldLabel {...getSuffixedId(id, "label", dataTestId, true)} htmlFor={id} onClick={() => toggleOpen()}>
        {label}
      </InputFieldLabel>
      <div
        {...getId(id, dataTestId)}
        className={`${styles["dropdown"]} ${open && styles["open"]} ${disabled && styles["disabled"]} ${
          hasError && styles["error"]
        } ${isFilled && styles["filled"]}`}
        onClick={() => toggleOpen()}
      >
        <div className={styles["content"]}>
          <span className={styles["name"]}>
            {selectedLabel() || <span className={styles["placeholder"]}>{placeholder}</span>}
          </span>
          <div className={styles["icon"]}>
            <Icon name={"simple-arrow"} />
          </div>
        </div>
        <div className={styles["expanded-section"]}>
          <div className={styles["expanded-content"]}>
            {items.map((item) => (
              <div
                {...getSuffixedId(id, `expanded-content-item-${item.value}`, dataTestId)}
                key={`${id}-dp-item-${item.label}`}
                className={styles["item"]}
                onClick={() => selectValue(item)}
              >
                <span className={`${styles["name"]} ${isSelected(item.value) && styles["selected"]}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {caption && (
        <InputFieldCaption {...getSuffixedId(id, "caption", dataTestId, true)} status={captionStatus}>
          {caption}
        </InputFieldCaption>
      )}
    </div>
  );
};

export default Dropdown;
