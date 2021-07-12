import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Radio } from ".";

afterEach(cleanup);

test("Radio should renders ok", () => {
  const x = render(
    <Radio id="date-inputs-month" value={0} isDisabled={false} hasError={false} onChange={() => null} />
  );
  expect(x.container).toBeInTheDocument();
});

test("Radio should be disabled", () => {
  const x = render(<Radio id="date-inputs-month" value={0} isDisabled={true} hasError={false} onChange={() => null} />);
  expect(x.getByTestId("radio-label")).toHaveClass("disabled");
});

test("Radio should has error", () => {
  const x = render(<Radio id="date-inputs-month" value={0} isDisabled={true} hasError={true} onChange={() => null} />);
  expect(x.getByTestId("radio-label")).toHaveClass("error");
});
