import React from "react";
import { mount, ReactWrapper, shallow } from "enzyme";

import { ButtonTextSize } from "../button-text";
import { ButtonSize } from "../button";

import ButtonBase from "./button-base";

describe("<ButtonBase />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow<typeof ButtonBase>(<ButtonBase>{"button"}</ButtonBase>);
    expect(wrapper).toMatchSnapshot();
  });
});
describe("<ButtonBase /> rendered in HOC", () => {
  let wrapper: ReactWrapper<typeof ButtonBase>;
  const size: ButtonTextSize | ButtonSize = "md";
  const handleFocus = jest.fn();
  const handleBlur = jest.fn();
  const onClick = jest.fn();
  const handleMouseEnter = jest.fn();
  const handleMouseLeave = jest.fn();
  const handleMouseDown = jest.fn();
  const handleMouseUp = jest.fn();
  const handleTouchStart = jest.fn();
  const handleTouchEnd = jest.fn();
  describe(" -> <ButtonText />", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof ButtonBase>(
        <ButtonBase
          fontSize={size}
          className={"buttonTextClassname"}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={onClick}
        >
          {"button-text"}
        </ButtonBase>
      );
    });
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should handle focus", () => {
      // when
      wrapper.find("button").simulate("focus");
      // then
      expect(handleFocus).toBeCalled();
    });

    it("should handle blur", () => {
      // when
      wrapper.find("button").simulate("blur");
      // then
      expect(handleBlur).toBeCalled();
    });

    it("should handle click", () => {
      // when
      wrapper.find("button").simulate("click");
      // then
      expect(onClick).toBeCalled();
    });
  });
  describe(" -> <Button />", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof ButtonBase>(
        <ButtonBase
          fontSize={size}
          className={"buttonClassname"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={onClick}
        >
          {"button"}
        </ButtonBase>
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
      expect(handleMouseEnter).toBeCalled();
      expect(handleMouseLeave).toBeCalled();
    });

    it("should handle mouse down/up events", () => {
      // when
      wrapper.find("button").simulate("mousedown");
      wrapper.find("button").simulate("mouseup");
      // then
      expect(handleMouseDown).toBeCalled();
      expect(handleMouseUp).toBeCalled();
    });

    it("should handle touch start/end events", () => {
      // when
      wrapper.find("button").simulate("touchstart");
      wrapper.find("button").simulate("touchend");
      // then
      expect(handleTouchStart).toBeCalled();
      expect(handleTouchEnd).toBeCalled();
    });

    it("should handle focus", () => {
      // when
      wrapper.find("button").simulate("focus");
      // then
      expect(handleFocus).toBeCalled();
    });

    it("should handle blur", () => {
      // when
      wrapper.find("button").simulate("blur");
      // then
      expect(handleBlur).toBeCalled();
    });

    it("should handle click", () => {
      // when
      wrapper.find("button").simulate("click");
      // then
      expect(onClick).toBeCalled();
    });
  });
});
