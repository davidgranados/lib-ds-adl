import React, { useState } from "react";

import { Label } from "../../atoms/label";
import { FieldCaption } from "../../atoms/caption-field";

import { DropdownProps } from "./dropdown.d";
import styles from "./dropdown.module.css";

const Dropdown: React.FC<DropdownProps> = ({
  id,
  label,
  isDisabled,
  items,
  hasError,
  caption,
  placeholder,
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const captionStatus = hasError ? "error" : undefined;

  const isSelected = (v: string | number) => v === selectedValue;
  const toggleOpen = () => !isDisabled && setOpen(!open);
  const selectedLabel = () => items.find((v) => v.value === selectedValue)?.label;
  const selectValue = (item: { label: string; value: string | number }) => {
    setSelectedValue(item.value);
    onChange(item.value);
  };

  return (
    <div>
      <Label data-testid="dropdown-label" id={id} onClick={() => toggleOpen()}>
        {label}
      </Label>
      <div
        className={`${styles["dropdown"]} ${open && styles["open"]} ${isDisabled && styles["disabled"]} ${
          hasError && styles["error"]
        }`}
        data-testid="dropdown-element"
        onClick={() => toggleOpen()}
      >
        <div className={styles["content"]}>
          <span className={styles["name"]}>{selectedLabel() || placeholder}</span>
        </div>
        <div data-testid="expanded-content" className={styles["expanded-section"]}>
          <div className={styles["expanded-content"]}>
            {items.map((item) => (
              <div
                data-testid="expanded-content-item"
                key={`dp-item-${item.label}`}
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
      {caption && <FieldCaption status={captionStatus}>{caption}</FieldCaption>}
    </div>
  );
};

export default Dropdown;
