import React from "react";
import { mount, ReactWrapper } from "enzyme";
import InputFieldLabel from "./input-field-label";

describe("<InputFieldLabel />", () => {
  let wrapper: ReactWrapper<typeof InputFieldLabel>;
  beforeEach(() => {
    jest.clearAllMocks();
    // given
    wrapper = mount<typeof InputFieldLabel>(<InputFieldLabel>label</InputFieldLabel>);
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
