import React, { useState, useEffect } from "react";

import styles from "./date-field.module.css";
import { DateFieldProps, InputFieldCaptionStatus } from "../../types";
import { Dropdown } from "../dropdown/";
import { NumberField } from "../number-field";
import { InputFieldCaption } from "../../atoms/input-field-caption";
import { InputFieldLabel } from "../../atoms/input-field-label";

const DateField: React.FC<DateFieldProps> = ({
  caption,
  hasError,
  onChange,
  onBlur,
  disabled,
  label,
  labelId,
  captionId,
  dayFieldId,
  monthFieldId,
  yearFieldId,
  dataTestId,
  labelDataTestId,
  captionDataTestId,
  dayFieldDataTestId,
  monthFieldDataTestId,
  yearFieldDataTestId,
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
    <div id={id} data-testid={dataTestId || id} className={styles["wrapper"]}>
      {!!label && (
        <InputFieldLabel id={labelId || `${id}-label`} dataTestId={labelDataTestId} htmlFor={"date-field-day"}>
          {label}
        </InputFieldLabel>
      )}
      <div className={styles["inputs"]}>
        <div className={`${styles["input"]} ${styles["day"]}`}>
          <NumberField
            id={dayFieldId || `${id}-day`}
            dataTestId={dayFieldDataTestId}
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
            id={monthFieldId || `${id}-month`}
            dataTestId={monthFieldDataTestId || monthFieldId}
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
            id={yearFieldId || `${id}-year`}
            dataTestId={yearFieldDataTestId}
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
        <InputFieldCaption id={captionId || `${id}-caption`} dataTestId={captionDataTestId} status={captionStatus}>
          {caption}
        </InputFieldCaption>
      )}
    </div>
  );
};

export default DateField;
