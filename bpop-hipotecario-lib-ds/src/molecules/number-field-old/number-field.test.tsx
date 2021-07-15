import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import NumberField from "./number-field";

afterEach(cleanup);

test("Numberfield should renders ok", () => {
  render(
    <NumberField
      id="date-inputs-day"
      label="Day"
      maxLength={2}
      placeholder="Day"
      hasError={false}
      onChange={() => null}
    />
  );
  expect(screen.getByText("Day")).toBeInTheDocument();
});

test("Numberfield typed a number and accept", () => {
  const x = render(
    <NumberField
      id="date-inputs-day"
      label="Day"
      maxLength={2}
      placeholder="Day"
      hasError={false}
      onChange={() => null}
    />
  );
  const input = x.getByTestId("input");
  fireEvent.change(input, { target: { value: 1 } });
  expect(screen.getByTestId("input")).toHaveValue("1");
});

test("Numberfield typed a string and reject", () => {
  const x = render(
    <NumberField
      id="date-inputs-day"
      label="Day"
      maxLength={2}
      placeholder="Day"
      hasError={false}
      onChange={() => null}
    />
  );
  const input = x.getByTestId("input");
  fireEvent.change(input, { target: { value: "a" } });
  expect(screen.getByTestId("input")).toHaveValue("");
});
