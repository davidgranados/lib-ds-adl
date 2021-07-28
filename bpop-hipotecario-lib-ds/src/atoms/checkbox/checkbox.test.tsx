import React from "react";
import { cleanup, render } from "@testing-library/react";

import Checkbox from "./checkbox";

afterEach(cleanup);

test("Checkbox should renders ok", () => {
  const x = render(<Checkbox id="checkbox" disabled={false} hasError={false} onChange={() => null} />);
  expect(x.container).toBeInTheDocument();
});

test("Checkbox should be disabled", () => {
  const x = render(<Checkbox id="checkbox" disabled={true} hasError={false} onChange={() => null} />);
  expect(x.getByTestId("checkbox-wrapper")).toHaveClass("disabled");
});

test("Checkbox should has error", () => {
  const x = render(<Checkbox id="checkbox" disabled={true} hasError={true} onChange={() => null} />);
  expect(x.getByTestId("checkbox-wrapper")).toHaveClass("error");
});
