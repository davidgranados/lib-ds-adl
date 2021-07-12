import React from "react";
import { cleanup, render } from "@testing-library/react";
import { RadioField } from ".";

afterEach(cleanup);

test("RadioField should renders ok", () => {
  const x = render(<RadioField id="id" text="Hi" isDisabled={false} onChange={() => null} />);
  expect(x.container).toBeInTheDocument();
});
