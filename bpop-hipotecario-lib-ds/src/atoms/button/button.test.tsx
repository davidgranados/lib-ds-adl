import React from "react";
import { mount, ReactWrapper } from "enzyme";

import Button from "./button";

describe("<Button />", () => {
  let wrapper: ReactWrapper<typeof Button>;
  const variant = "primary";
  const text = "button";
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  const onClick = jest.fn();
  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn();
  const onMouseDown = jest.fn();
  const onMouseUp = jest.fn();
  const onTouchStart = jest.fn();
  const onTouchEnd = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    // given
    wrapper = mount<typeof Button>(
      <Button
        text={text}
        variant={variant}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={onClick}
      />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle hover", () => {
    // when
    wrapper.find("button").simulate("mouseenter");
    wrapper.find("button").simulate("mouseleave");
    // then
    expect(onMouseEnter).toBeCalled();
    expect(onMouseLeave).toBeCalled();
  });

  it("should handle mouse down/up events", () => {
    // when
    wrapper.find("button").simulate("mousedown");
    wrapper.find("button").simulate("mouseup");
    // then
    expect(onMouseDown).toBeCalled();
    expect(onMouseUp).toBeCalled();
  });

  it("should handle touch start/end events", () => {
    // when
    wrapper.find("button").simulate("touchstart");
    wrapper.find("button").simulate("touchend");
    // then
    expect(onTouchStart).toBeCalled();
    expect(onTouchEnd).toBeCalled();
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

  it("should handle click", () => {
    // when
    wrapper.find("button").simulate("click");
    // then
    expect(onClick).toBeCalled();
  });
});
