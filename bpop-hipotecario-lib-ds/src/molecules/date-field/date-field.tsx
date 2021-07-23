import React, { useState, useEffect } from "react";

import styles from "./date-field.module.css";
import { DateFieldProps, InputFieldCaptionStatus } from "../../types";
import { Dropdown } from "../dropdown/";
import { NumberField } from "../number-field";
import { InputFieldCaption } from "../../atoms/input-field-caption";
import { InputFieldLabel } from "../../atoms/input-field-label";

const DateField: React.FC<DateFieldProps> = ({ caption, hasError, onChange, onBlur, disabled, label }) => {
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
  }, [day, month, year]);

  const handleDayChange = (v: number | null) => setDay(v || 0);
  const handleMonthChange = (v: string | number) => setMonth(+v);
  const handleYearChange = (v: number | null) => setYear(v || 0);

  return (
    <div className={styles["wrapper"]}>
      {!!label && (
        <InputFieldLabel data-testid="datefield-label" htmlFor={"date-field-day"}>
          {label}
        </InputFieldLabel>
      )}
      <div className={styles["inputs"]}>
        <div className={`${styles["input"]} ${styles["day"]}`}>
          <NumberField
            data-testid="date-field-day"
            id="date-field-day"
            label="Día"
            maxLength={2}
            placeholder="DD"
            size={"lg"}
            onBlur={onBlur}
            hasError={hasError}
            disabled={disabled}
            onChange={(v) => handleDayChange(parseInt(v.target.value))}
          />
        </div>
        <div className={`${styles["input"]} ${styles["month"]}`}>
          <Dropdown
            id="date-field-month"
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
            id="date-field-year"
            label="Año"
            maxLength={4}
            placeholder="AAAA"
            size={"lg"}
            onBlur={onBlur}
            hasError={hasError}
            disabled={disabled}
            onChange={(v) => handleYearChange(parseInt(v.target.value))}
          />
        </div>
      </div>
      {caption && <InputFieldCaption status={captionStatus}>{caption}</InputFieldCaption>}
    </div>
  );
};

export default DateField;
