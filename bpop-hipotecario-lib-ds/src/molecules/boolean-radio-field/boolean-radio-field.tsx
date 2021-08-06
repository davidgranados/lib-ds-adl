import React, { FC } from "react";

import { BooleanRadioFieldProps } from "../../types";
import { RadioButton } from "../../atoms/radio-button";
import { TooltipIcon } from "../../atoms/tooltip-icon";
import { getSuffixedId } from "../../helpers";

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
  dataTestId,
  withTooltip = false,
  falseValueLabel = "No",
  trueValueLabel = "Si",
  id = "boolean-radio-field",
}) => {
  return (
    <div {...getSuffixedId(id, "wrapper", dataTestId)} className={styles["wrapper"]}>
      <div className={styles["label"]}>
        {labelText}
        {withTooltip && (
          <TooltipIcon
            {...getSuffixedId(id, "tooltip-icon", dataTestId, true)}
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
          {...getSuffixedId(id, "false-radio", dataTestId, true)}
          name={name}
          value={"false"}
          label={falseValueLabel}
          checked={!initialValue}
          onChange={onChange}
        />
        <RadioButton
          {...getSuffixedId(id, "true-radio", dataTestId, true)}
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
