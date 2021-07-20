import React from "react";
import { mount, ReactWrapper } from "enzyme";
import InputFieldCaption from "./input-field-caption";

describe("<InputFieldCaption />", () => {
  let wrapper: ReactWrapper<typeof InputFieldCaption>;
  beforeEach(() => {
    jest.clearAllMocks();
    // given
    wrapper = mount<typeof InputFieldCaption>(<InputFieldCaption>caption</InputFieldCaption>);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
