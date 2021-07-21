import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Dropdown from "./dropdown";

const months = ["January", "February"];

afterEach(cleanup);

test("DateField should renders ok", async () => {
  render(
    <Dropdown
      id="id"
      items={months.map((v, i) => ({ label: v, value: i }))}
      label="Month"
      value={99}
      caption="Fake caption"
      hasError={true}
      disabled={true}
      placeholder="Placeholder"
      onChange={() => null}
    />
  );
  expect(screen.getByText("Month")).toBeInTheDocument();
});
