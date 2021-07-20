import React from "react";
import { mount, ReactWrapper } from "enzyme";
import Tooltip from "./tooltip";

describe("<Tooltip />", () => {
  let wrapper: ReactWrapper<typeof Tooltip>;
  const tooltipTitle = "tooltip title";
  const tooltipBody = "tooltip body";
  beforeEach(() => {
    jest.clearAllMocks();
    // given
    wrapper = mount<typeof Tooltip>(
      <Tooltip textTitle={tooltipTitle} textBody={tooltipBody}>
        Click Me!
      </Tooltip>
    );
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
