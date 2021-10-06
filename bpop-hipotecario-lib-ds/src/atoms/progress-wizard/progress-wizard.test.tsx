import React from "react";
import { render } from "@testing-library/react";

import ProgressWizard from "./progress-wizard";

describe("<ProgressWizard />", () => {
  const items = ["Ingresos", "Tipo de financiación", "Pre aprobado"];

  test("ProgressWizard should renders ok", () => {
    const x = render(<ProgressWizard items={items} currentItem={1} />);
    expect(x.container).toBeInTheDocument();
  });
});
