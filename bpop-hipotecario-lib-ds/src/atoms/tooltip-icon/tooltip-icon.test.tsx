import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { TooltipIconProps } from "../../types";

import TooltipIcon from "./tooltip-icon";

describe("<TooltipIcon />", () => {
  let wrapper: ReactWrapper<typeof TooltipIcon>;
  const props: TooltipIconProps = {
    marginLeft: 20,
    marginRight: 20,
    textTitle: "tooltipTextTitle",
    textBody: "tooltipTextBody",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // given
    wrapper = mount<typeof TooltipIcon>(<TooltipIcon {...props} />);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
