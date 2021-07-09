import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import TextField from "./text-field";

afterEach(cleanup);

test("TextField should renders ok", () => {
  render(<TextField id="date-inputs-day" label="Day" placeholder="Day" hasError={false} onChange={() => null} />);
  expect(screen.getByText("Day")).toBeInTheDocument();
});

test("TextField typed a number and accept", () => {
  const x = render(
    <TextField id="date-inputs-day" label="Day" placeholder="Day" hasError={false} onChange={() => null} />
  );
  const input = x.getByTestId("input");
  fireEvent.change(input, { target: { value: 1 } });
  expect(screen.getByTestId("input")).toHaveValue("1");
});
