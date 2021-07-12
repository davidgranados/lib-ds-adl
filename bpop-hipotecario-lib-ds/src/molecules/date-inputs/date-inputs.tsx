import React, { useState, useEffect } from "react";
import { DateInputsProps } from "./date-inputs.d";
import styles from "./date-inputs.module.css";
import Dropdown from "../dropdown/dropdown";
import NumberField from "../number-field/number-field";

const DateInputs: React.FC<DateInputsProps> = ({ caption, hasError, onChange }) => {
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
  }, [day, month, year]);

  const handleDayChange = (v: number | null) => setDay(v || 0);
  const handleMonthChange = (v: string | number) => setMonth(+v);
  const handleYearChange = (v: number | null) => setYear(v || 0);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["inputs"]}>
        <div className={styles["input"]}>
          <NumberField
            data-testid="date-inputs-day"
            id="date-inputs-day"
            label="Day"
            maxLength={2}
            placeholder="Day"
            hasError={hasError}
            onChange={(v) => handleDayChange(v)}
          />
        </div>
        <div className={`${styles["input"]} ${styles["month"]}`}>
          <Dropdown
            id="date-inputs-month"
            items={months.map((v, i) => ({ label: v, value: i }))}
            label="Month"
            value={month}
            hasError={hasError}
            onChange={(v) => handleMonthChange(v)}
          />
        </div>
        <div className={styles["input"]}>
          <NumberField
            id="date-inputs-year"
            label="Year"
            maxLength={4}
            placeholder="Year"
            hasError={hasError}
            onChange={(v) => handleYearChange(v)}
          />
        </div>
      </div>
      {caption && <span className={`${styles["caption"]} ${hasError && styles["error"]}`}>{caption}</span>}
    </div>
  );
};

export default DateInputs;