import React from "react";
import { cleanup, render } from "@testing-library/react";
import { CheckboxField } from ".";

afterEach(cleanup);

test("CheckboxField should renders ok", () => {
  const x = render(<CheckboxField id="id" text="Hi" isDisabled={false} onChange={() => null} />);
  expect(x.container).toBeInTheDocument();
});
