import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Dropdown from "./dropdown";

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

afterEach(cleanup);

test("Dropdown should renders ok", () => {
  render(
    <Dropdown
      id="date-inputs-month"
      items={months.map((v, i) => ({ label: v, value: i }))}
      label="Month"
      value={0}
      hasError={false}
      onChange={() => null}
    />
  );
  expect(screen.getByText("Month")).toBeInTheDocument();
});

test("Dropdown should open when click on him", () => {
  const x = render(
    <Dropdown
      id="date-inputs-month"
      items={months.map((v, i) => ({ label: v, value: i }))}
      label="Month"
      value={0}
      hasError={false}
      onChange={() => null}
    />
  );
  fireEvent.click(x.getByTestId("dropdown-element"));
  expect(x.getByTestId("dropdown-element")).toHaveClass("open");
});

test("Dropdown should open when click on the label", () => {
  const x = render(
    <Dropdown
      id="date-inputs-month"
      items={months.map((v, i) => ({ label: v, value: i }))}
      label="Month"
      value={0}
      hasError={false}
      onChange={() => null}
    />
  );
  fireEvent.click(x.getByTestId("dropdown-label"));
  expect(x.getByTestId("dropdown-element")).toHaveClass("open");
});

test("Dropdown should select item on click", () => {
  const expectedItemValue = 0;
  let selectedItemValue = null;
  const x = render(
    <Dropdown
      id="date-inputs-month"
      items={months.map((v, i) => ({ label: v, value: i }))}
      label="Month"
      value={0}
      hasError={false}
      onChange={(v) => {
        selectedItemValue = v;
      }}
    />
  );
  const firstElement = x.getAllByTestId("expanded-content-item")[0];
  fireEvent.click(firstElement);

  expect(expectedItemValue).toEqual(selectedItemValue);
});
