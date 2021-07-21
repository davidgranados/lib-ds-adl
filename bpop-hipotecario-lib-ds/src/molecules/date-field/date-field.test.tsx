import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import DateField from "./date-field";

afterEach(cleanup);

test("DateField should renders ok", async () => {
  const x = render(<DateField caption="This is a caption" id="date-field-birthday" onChange={() => null} />);
  const dayInput = x.container.getElementsByTagName("input")[0];
  const yearInput = x.container.getElementsByTagName("input")[1];
  const firstDropdownItem = x.container.getElementsByClassName("item")[0];

  fireEvent.change(dayInput, { target: { value: 1 } });
  fireEvent.change(yearInput, { target: { value: 1997 } });
  fireEvent.click(firstDropdownItem);
  expect(screen.getByText("Día")).toBeInTheDocument();
});

test("DateField day and year emits null", async () => {
  let result;
  const expectedResult = { day: 0, month: 99, year: 0 };
  const x = render(
    <DateField caption="This is a caption" id="date-field-birthday" onChange={(v: unknown) => (result = v)} />
  );
  const dayInput = x.container.getElementsByTagName("input")[0];
  const yearInput = x.container.getElementsByTagName("input")[1];

  fireEvent.change(dayInput, { target: { value: 1 } });
  fireEvent.change(yearInput, { target: { value: 1997 } });
  fireEvent.change(dayInput, { target: { value: null } });
  fireEvent.change(yearInput, { target: { value: null } });
  expect(expectedResult).toEqual(result);
});

test("DateField should has caption with error", async () => {
  render(<DateField caption="This is a caption" id="date-field-birthday" hasError={true} onChange={() => null} />);
  expect(screen.getByText("This is a caption")).toHaveClass("error");
});
