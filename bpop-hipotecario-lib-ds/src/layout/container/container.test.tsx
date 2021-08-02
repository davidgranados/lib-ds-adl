import React from "react";
import { mount, ReactWrapper } from "enzyme";

import Container from "./container";

describe("<Container />", () => {
  let wrapper: ReactWrapper<typeof Container>;

  beforeEach(() => {
    jest.clearAllMocks();
    // given
    wrapper = mount<typeof Container>(<Container />);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
