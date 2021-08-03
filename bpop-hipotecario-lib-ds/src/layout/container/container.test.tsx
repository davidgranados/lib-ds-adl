import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { ContainerProps } from "../../types";

import Container from "./container";

describe("<Container />", () => {
  let wrapper: ReactWrapper<typeof Container>;
  const props: ContainerProps = {
    className: "class-from-implementation",
    title: "This is the title",
    titleClassName: "title-class-from-implementation",
    titleHTMLTag: "h6",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // given
    wrapper = mount<typeof Container>(<Container {...props}>Im in a Container</Container>);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
