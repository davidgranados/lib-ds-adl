import React from "react";
import { cleanup, render } from "@testing-library/react";
import { CheckboxField } from ".";

afterEach(cleanup);

test("CheckboxField should renders ok", () => {
  const x = render(
    <CheckboxField id="id" name="checkbox-name" disabled={false} onChange={() => null}>
      Hi
    </CheckboxField>
  );
  expect(x.container).toBeInTheDocument();
});
