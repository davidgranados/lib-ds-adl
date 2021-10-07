import React from "react";
import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import { Autocomplete } from ".";

describe("<Autocomplete />", () => {
  const months = ["January", "February"];
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const component = (
    <Autocomplete
      items={months.map((i) => ({ label: i, value: i }))}
      hasError={false}
      onChange={onChange}
      onBlur={onBlur}
      caption={"Test caption"}
    />
  );

  it("Autocomplete should renders ok", () => {
    const x = render(
      <Autocomplete
        items={months.map((i) => ({ label: i, value: i }))}
        hasError={true}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
    expect(x.container).toBeInTheDocument();
  });

  it("Should open items on focus", () => {
    render(component);
    const element = screen.getByTestId("expanded-section");
    userEvent.click(element);
    expect(element).toHaveClass("open");
  });

  it("Should show no elements when search invalid criteria", () => {
    render(component);
    const element = screen.getByTestId("input-autocomplete");
    userEvent.type(element, "asdasd");
    const noResultsElement = screen.getByTestId("no-results");
    waitFor(() => {
      expect(noResultsElement).toBeInTheDocument();
    });
  });

  it("Should show minimum characters when type one char", () => {
    render(component);
    const element = screen.getByTestId("input-autocomplete");
    userEvent.type(element, "a");
    const minCharsElement = screen.getByTestId("minimum-search");
    waitFor(() => {
      expect(minCharsElement).toBeInTheDocument();
    });
  });

  it("Should show items to match with criteria", () => {
    render(component);
    const element = screen.getByTestId("input-autocomplete");
    userEvent.type(element, "jan");
    const foundedElement = screen.getByTestId("input-autocomplete-ac-item-January");
    waitFor(() => {
      expect(foundedElement).toBeInTheDocument();
    });
  });

  it("Should select founded item ok", () => {
    render(component);
    const element = screen.getByTestId("input-autocomplete");
    userEvent.type(element, "jan");
    const foundedElement = screen.getByTestId("input-autocomplete-ac-item-January");
    userEvent.click(foundedElement);
    waitFor(() => {
      expect(element).toHaveValue("January");
    });
  });
});
