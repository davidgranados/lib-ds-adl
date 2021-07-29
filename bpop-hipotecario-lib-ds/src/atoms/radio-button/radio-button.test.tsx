import React from "react";
import { mount, ReactWrapper } from "enzyme";

import RadioButton from "./radio-button";

describe("<RadioButton />", () => {
  let wrapper: ReactWrapper<typeof RadioButton>;
  const onChange = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    // given // when
    wrapper = mount<typeof RadioButton>(<RadioButton label={"radio-button"} onChange={onChange} />);
  });
  it("should match snapshot", () => {
    // then
    expect(wrapper).toMatchSnapshot();
  });
  it("should handle onChange", () => {
    // when
    wrapper.find("input").simulate("change");
    // then
    expect(onChange).toHaveBeenCalled();
  });
});
