import React from "react";
import { cleanup, render } from "@testing-library/react";
import RadioField from "./radio-field";

afterEach(cleanup);

test("RadioField should renders ok", () => {
  const x = render(<RadioField id="id" label="Hi" disabled={false} onChange={() => null} />);
  expect(x.container).toBeInTheDocument();
});
