import React, { FC } from "react";

import { BooleanRadioFieldProps } from "../../types";
import { RadioButton } from "../../atoms/radio-button";
import { TooltipIcon } from "../../atoms/tooltip-icon";

import styles from "./boolean-radio-field.module.css";

const BooleanRadioField: FC<BooleanRadioFieldProps> = ({
  name,
  initialValue,
  onChange,
  labelText,
  tooltipIcon,
  tooltipTextTitle,
  tooltipTextBody,
  tooltipMarginLeft,
  tooltipMarginRight,
  withTooltip = false,
  falseValueLabel = "No",
  trueValueLabel = "Si",
  falseValueId = "boolean-radio-field-false",
  trueValueId = "boolean-radio-field-true",
}) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["label"]}>
        {labelText}
        {withTooltip && (
          <TooltipIcon
            icon={tooltipIcon}
            marginLeft={tooltipMarginLeft}
            marginRight={tooltipMarginRight}
            textTitle={tooltipTextTitle}
            textBody={tooltipTextBody}
          />
        )}
      </div>
      <div className={styles["radio-buttons-wrapper"]}>
        <RadioButton
          id={falseValueId}
          name={name}
          value={"false"}
          label={falseValueLabel}
          checked={!initialValue}
          onChange={onChange}
        />
        <RadioButton
          id={trueValueId}
          name={name}
          value={"true"}
          label={trueValueLabel}
          checked={initialValue}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default BooleanRadioField;
