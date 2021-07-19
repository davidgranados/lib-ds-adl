import React, { useState, useEffect } from "react";

import { Dropdown } from "../dropdown/";
import { NumberField } from "../number-field";

import { DateFieldProps } from "../../types";

import styles from "./date-field.module.css";

const DateField: React.FC<DateFieldProps> = ({ caption, hasError, onChange }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    onChange({ day, month, year });
  }, [day, month, year, onChange]);

  const handleDayChange = (v: number | null) => setDay(v || 0);
  const handleMonthChange = (v: string | number) => setMonth(+v);
  const handleYearChange = (v: number | null) => setYear(v || 0);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["inputs"]}>
        <div className={`${styles["input"]} ${styles["day"]}`}>
          <NumberField
            data-testid="date-field-day"
            id="date-field-day"
            label="Day"
            maxLength={2}
            placeholder="Day"
            size={"lg"}
            hasError={hasError}
            onChange={(v) => handleDayChange(parseInt(v.target.value))}
          />
        </div>
        <div className={`${styles["input"]} ${styles["month"]}`}>
          <Dropdown
            id="date-field-month"
            items={months.map((v, i) => ({ label: v, value: i }))}
            label="Month"
            value={month}
            hasError={hasError}
            onChange={(v) => handleMonthChange(v)}
          />
        </div>
        <div className={`${styles["input"]} ${styles["year"]}`}>
          <NumberField
            id="date-field-year"
            label="Year"
            maxLength={4}
            placeholder="Year"
            size={"lg"}
            hasError={hasError}
            onChange={(v) => handleYearChange(parseInt(v.target.value))}
          />
        </div>
      </div>
      {caption && <span className={`${styles["caption"]} ${hasError && styles["error"]}`}>{caption}</span>}
    </div>
  );
};

export default DateField;
