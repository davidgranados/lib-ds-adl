import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import AlertBadge from "./alert-badge";

afterEach(cleanup);
test("DateField should renders ok", async () => {
  render(<AlertBadge>Holi</AlertBadge>);
  expect(screen.getByText("Holi")).toBeInTheDocument();
});
