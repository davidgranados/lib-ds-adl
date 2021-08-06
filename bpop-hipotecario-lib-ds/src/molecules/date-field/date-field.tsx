import React, { useState, useEffect } from "react";

import { DateFieldProps, InputFieldCaptionStatus } from "../../types";
import { Dropdown } from "../dropdown/";
import { getId, getSuffixedId } from "../../helpers";
import { InputFieldCaption } from "../../atoms/input-field-caption";
import { InputFieldLabel } from "../../atoms/input-field-label";
import { NumberField } from "../number-field";

import styles from "./date-field.module.css";

const DateField: React.FC<DateFieldProps> = ({
  caption,
  hasError,
  onChange,
  onBlur,
  disabled,
  label,
  dataTestId,
  id = "date-field",
}) => {
  const captionStatus: InputFieldCaptionStatus = hasError ? "error" : "default";
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(99);
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    onChange({ day, month, year });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day, month, year]);

  const handleDayChange = (v: number | null) => setDay(v || 0);
  const handleMonthChange = (v: string | number) => setMonth(+v);
  const handleYearChange = (v: number | null) => setYear(v || 0);

  return (
    <div {...getId(id, dataTestId)} className={styles["wrapper"]}>
      {!!label && (
        <InputFieldLabel {...getSuffixedId(id, "label", dataTestId, true)} htmlFor={"date-field-day"}>
          {label}
        </InputFieldLabel>
      )}
      <div className={styles["inputs"]}>
        <div className={`${styles["input"]} ${styles["day"]}`}>
          <NumberField
            {...getSuffixedId(id, "day", dataTestId, true)}
            label="Día"
            maxLength={2}
            placeholder="DD"
            size={"lg"}
            onBlur={onBlur}
            hasError={hasError}
            disabled={disabled}
            onChange={(event) => handleDayChange(parseInt(event.target.value))}
          />
        </div>
        <div className={`${styles["input"]} ${styles["month"]}`}>
          <Dropdown
            {...getSuffixedId(id, "month", dataTestId, true)}
            items={months.map((v, i) => ({ label: v, value: i }))}
            label="Mes"
            value={month}
            placeholder={"Selecciona un mes"}
            hasError={hasError}
            disabled={disabled}
            onChange={(v) => handleMonthChange(v)}
          />
        </div>
        <div className={`${styles["input"]} ${styles["year"]}`}>
          <NumberField
            {...getSuffixedId(id, "year", dataTestId, true)}
            label="Año"
            maxLength={4}
            placeholder="AAAA"
            size={"lg"}
            onBlur={onBlur}
            hasError={hasError}
            disabled={disabled}
            onChange={(event) => handleYearChange(parseInt(event.target.value))}
          />
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

export default DateField;
