import React, { useState } from "react";

import { InputFieldLabel } from "../../atoms/input-field-label";
import { InputFieldCaption } from "../../atoms/input-field-caption";
import { DropdownProps } from "../../types";

import styles from "./dropdown.module.css";
import { Icon } from "../../atoms/icon";

const Dropdown: React.FC<DropdownProps> = ({
  label,
  disabled,
  items,
  hasError,
  caption,
  placeholder,
  value,
  wrapperId,
  labelId,
  captionId,
  dataTestId,
  wrapperDataTestId,
  labelDataTestId,
  captionDataTestId,
  id = "dropdown-element",
  onChange,
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
    <div
      id={wrapperId || `${id}-wrapper`}
      data-testid={wrapperDataTestId || wrapperId || `${id}-wrapper`}
      className={styles["wrapper"]}
    >
      <InputFieldLabel
        id={labelId || `${id}-label`}
        dataTestId={labelDataTestId}
        htmlFor={id}
        onClick={() => toggleOpen()}
      >
        {label}
      </InputFieldLabel>
      <div
        id={id}
        data-testid={dataTestId || id}
        className={`${styles["dropdown"]} ${open && styles["open"]} ${disabled && styles["disabled"]} ${
          hasError && styles["error"]
        } ${isFilled && styles["filled"]}`}
        onClick={() => toggleOpen()}
      >
        <div id={`${id}-content`} data-testid={`${id}-content`} className={styles["content"]}>
          <span id={`${id}-name`} data-testid={`${id}-name`} className={styles["name"]}>
            {selectedLabel() || (
              <span id={`${id}-placeholder`} data-testid={`${id}-placeholder`} className={styles["placeholder"]}>
                {placeholder}
              </span>
            )}
          </span>
          <div className={styles["icon"]}>
            <Icon name={"simple-arrow"} />
          </div>
        </div>
        <div
          id={`${id}-expanded-section`}
          data-testid={`${id}-expanded-section`}
          className={styles["expanded-section"]}
        >
          <div
            id={`${id}-expanded-content`}
            data-testid={`${id}-expanded-content`}
            className={styles["expanded-content"]}
          >
            {items.map((item) => (
              <div
                id={`${id}-expanded-content-item-${item.value}`}
                data-testid={`${id}-expanded-content-item-${item.value}`}
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
        <InputFieldCaption id={captionId || `${id}-caption`} dataTestId={captionDataTestId} status={captionStatus}>
          {caption}
        </InputFieldCaption>
      )}
    </div>
  );
};

export default Dropdown;
