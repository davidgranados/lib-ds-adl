import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import DateInputs from "./date-inputs";

afterEach(cleanup);

test("DateInputs should renders ok", async () => {
  const x = render(<DateInputs caption="This is a caption" id="date-inputs-birthday" onChange={() => null} />);
  const dayInput = await x.container.getElementsByTagName("input")[0];
  const yearInput = await x.container.getElementsByTagName("input")[1];
  const firstDropdownItem = await x.container.getElementsByClassName("item")[0];

  fireEvent.change(dayInput, { target: { value: 1 } });
  fireEvent.change(yearInput, { target: { value: 1997 } });
  fireEvent.click(firstDropdownItem);
  expect(screen.getByText("Day")).toBeInTheDocument();
});
