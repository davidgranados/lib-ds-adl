import React from "react";
import { render, screen } from "@testing-library/react";

import InputMoney from "./input-money";

describe("<InputMoney />", () => {
  const onChange = jest.fn();

  test("InputMoney should renders ok", () => {
    const x = render(<InputMoney label={"Test"} onChange={onChange} caption={"Test caption"} />);
    expect(x.container).toBeInTheDocument();
  });

  test("InputMoney should has error class", () => {
    render(<InputMoney label={"Test"} onChange={onChange} hasError={true} />);
    const element = screen.getByTestId("input-text-base");
    expect(element).toHaveClass("error");
  });
});
