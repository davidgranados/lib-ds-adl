import React from "react";
import { mount, ReactWrapper } from "enzyme";

import ButtonText from "./button-text";

describe("<ButtonText />", () => {
  let wrapper: ReactWrapper<typeof ButtonText>;
  const variant = "primary";
  const text = "button-text";
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  const onClick = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    // given
    wrapper = mount<typeof ButtonText>(
      <ButtonText text={text} variant={variant} onFocus={onFocus} onBlur={onBlur} onClick={onClick} />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle focus", () => {
    // when
    wrapper.find("button").simulate("focus");
    // then
    expect(onFocus).toBeCalled();
  });

  it("should handle blur", () => {
    // when
    wrapper.find("button").simulate("blur");
    // then
    expect(onBlur).toBeCalled();
  });

  it("should call onClick", () => {
    // when
    wrapper.find("button").simulate("click");
    // then
    expect(onClick).toBeCalled();
  });
});
