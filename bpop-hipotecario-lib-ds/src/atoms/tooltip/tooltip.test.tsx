import React from "react";
import { mount } from "enzyme";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tooltip from "./tooltip";

describe("<Tooltip />", () => {
  const tooltipTitle = "tooltip title";
  const tooltipBody = "tooltip body";
  beforeEach(() => {
    jest.clearAllMocks();
    // given
  });
  it("should match snapshot", () => {
    const wrapper = mount<typeof Tooltip>(
      <Tooltip textTitle={tooltipTitle} textBody={tooltipBody}>
        Click Me!
      </Tooltip>
    );
    // then
    expect(wrapper).toMatchSnapshot();
  });
  it("should match snapshot fullwidth", () => {
    const wrapper = mount<typeof Tooltip>(
      <Tooltip textTitle={tooltipTitle} textBody={tooltipBody} marginLeft={20} marginRight={20} fullWidth>
        Click Me!
      </Tooltip>
    );
    // then
    expect(wrapper).toMatchSnapshot();
  });
  it("should handle onChange", () => {
    // given
    render(
      <Tooltip textTitle={tooltipTitle} textBody={tooltipBody}>
        Click Me!
      </Tooltip>
    );
    const tooltipWrapper = screen.getByTestId("tooltip-wrapper");
    // when
    userEvent.click(tooltipWrapper);
    // then
    const tooltip = screen.getByTestId("tooltip");
    expect(tooltip.className.includes("visible")).toBe(true);
  });
  it("should handle onChange fullWidth", () => {
    // given
    render(
      <Tooltip
        dataTestId={"tooltip-test-id"}
        textTitle={tooltipTitle}
        textBody={tooltipBody}
        marginLeft={20}
        marginRight={20}
        fullWidth
      >
        Click Me!
      </Tooltip>
    );
    const tooltipWrapper = screen.getByTestId("tooltip-test-id-wrapper");
    // when
    userEvent.click(tooltipWrapper);
    // then
    const tooltip = screen.getByTestId("tooltip-test-id");
    expect(tooltip.className.includes("visible")).toBe(true);
  });
});
