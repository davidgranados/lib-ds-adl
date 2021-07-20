import React from "react";
import { cleanup, render } from "@testing-library/react";
import RadioButton from "./radio-button";

afterEach(cleanup);

test("RadioButton should renders ok", () => {
  const x = render(<RadioButton id="id" label="Hi" disabled={false} onChange={() => null} />);
  expect(x.container).toBeInTheDocument();
});
