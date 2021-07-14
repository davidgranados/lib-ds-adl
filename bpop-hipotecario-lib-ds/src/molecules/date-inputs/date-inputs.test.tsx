import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import DateInputs from "./date-inputs";

afterEach(cleanup);

test("DateInputs should renders ok", async () => {
  const x = render(<DateInputs caption="This is a caption" id="date-inputs-birthday" onChange={() => null} />);
  const dayInput = x.container.getElementsByTagName("input")[0];
  const yearInput = x.container.getElementsByTagName("input")[1];
  const firstDropdownItem = x.container.getElementsByClassName("item")[0];

  fireEvent.change(dayInput, { target: { value: 1 } });
  fireEvent.change(yearInput, { target: { value: 1997 } });
  fireEvent.click(firstDropdownItem);
  expect(screen.getByText("Day")).toBeInTheDocument();
});

test("DateInputs day and year emits null", async () => {
  let result;
  const expectedResult = { day: 0, month: 0, year: 0 };
  const x = render(
    <DateInputs caption="This is a caption" id="date-inputs-birthday" onChange={(v: any) => (result = v)} />
  );
  const dayInput = x.container.getElementsByTagName("input")[0];
  const yearInput = x.container.getElementsByTagName("input")[1];

  fireEvent.change(dayInput, { target: { value: 1 } });
  fireEvent.change(yearInput, { target: { value: 1997 } });
  fireEvent.change(dayInput, { target: { value: null } });
  fireEvent.change(yearInput, { target: { value: null } });
  expect(expectedResult).toEqual(result);
});

test("DateInputs should has caption with error", async () => {
  render(<DateInputs caption="This is a caption" id="date-inputs-birthday" hasError={true} onChange={() => null} />);
  expect(screen.getByText("This is a caption")).toHaveClass("error");
});
