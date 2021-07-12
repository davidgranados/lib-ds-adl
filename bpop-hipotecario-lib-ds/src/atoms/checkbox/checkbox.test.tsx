import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Checkbox } from ".";

afterEach(cleanup);

test("Checkbox should renders ok", () => {
  const x = render(<Checkbox id="id" isDisabled={false} hasError={false} onChange={() => null} />);
  expect(x.container).toBeInTheDocument();
});

test("Checkbox should be disabled", () => {
  const x = render(<Checkbox id="id" isDisabled={true} hasError={false} onChange={() => null} />);
  expect(x.getByTestId("checkbox-label")).toHaveClass("disabled");
});

test("Checkbox should has error", () => {
  const x = render(<Checkbox id="id" isDisabled={true} hasError={true} onChange={() => null} />);
  expect(x.getByTestId("checkbox-label")).toHaveClass("error");
});
