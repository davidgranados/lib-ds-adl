import React from "react";
import { mount, ReactWrapper } from "enzyme";
import InputTextBase from "./input-text-base";

describe("<InputTextBase />", () => {
  let wrapper: ReactWrapper<typeof InputTextBase>;
  const handleFocus = jest.fn();
  const handleBlur = jest.fn();
  const handleInput = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    // given
    wrapper = mount<typeof InputTextBase>(
      <InputTextBase id={"input-test-id"} onFocus={handleFocus} onBlur={handleBlur} onInput={handleInput} />
    );
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle focus", () => {
    // when
    wrapper.find("#input-test-id").first().simulate("focus");
    // then
    expect(handleFocus).toBeCalled();
  });

  it("should handle blur", () => {
    // when
    wrapper.find("#input-test-id").first().simulate("blur");
    // then
    expect(handleBlur).toBeCalled();
  });

  it("should handle input", () => {
    // when
    wrapper.find("#input-test-id").first().simulate("input");
    // then
    expect(handleInput).toBeCalled();
  });
});
