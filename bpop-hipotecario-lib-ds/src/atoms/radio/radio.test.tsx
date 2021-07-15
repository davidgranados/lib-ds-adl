import React from "react";
import { mount, ReactWrapper } from "enzyme";

import Radio from "./radio";

describe("<Radio />", () => {
  let wrapper: ReactWrapper<typeof Radio>;
  const props = {
    id: "id",
    onChange: jest.fn(),
  };
  describe("with initial value", () => {
    const initialValue = "test radio-old value";
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof Radio>(<Radio {...props} value={initialValue} />);
    });
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
    describe("wrapper <label />", () => {
      it("should render correctly", () => {
        // when
        const labelElement = wrapper.find("label");
        // then
        expect(labelElement.exists()).toBe(true);
        expect(labelElement.hasClass("wrapper")).toBe(true);
        expect(labelElement.hasClass("wrapper--enabled")).toBe(true);
      });
    });
    describe("hidden <input />", () => {
      it("should render correctly", () => {
        // when
        const inputElement = wrapper.find("input");
        // then
        expect(inputElement.exists()).toBe(true);
        expect(inputElement.prop("type")).toEqual("radio");
        expect(inputElement.prop("id")).toEqual(props.id);
        expect(inputElement.prop("value")).toEqual(initialValue);
        expect(inputElement.hasClass("hidden")).toBe(true);
      });
    });
    describe("control <span />", () => {
      it("should render correctly", () => {
        // when
        const outerSpanElement = wrapper.find("span").first();
        // then
        expect(outerSpanElement.exists()).toBe(true);
        expect(outerSpanElement.hasClass("control")).toBe(true);
      });
      describe("inner circle <span />", () => {
        it("should render correctly", () => {
          // when
          const innerSpanElement = wrapper.find("span > span");
          // then
          expect(innerSpanElement.exists()).toBe(true);
          expect(innerSpanElement.hasClass("control__circle")).toBe(true);
        });
      });
    });
  });
  describe("without initial value", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof Radio>(<Radio {...props} />);
    });
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
    describe("hidden <input />", () => {
      it("should render correctly", () => {
        // then
        expect(wrapper.find("input").prop("value")).toEqual(undefined);
      });
    });
  });
  describe("with error", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof Radio>(<Radio {...props} hasError={true} />);
    });
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
    describe("wrapper <label />", () => {
      it("should render correctly", () => {
        // then
        expect(wrapper.find("label").hasClass("wrapper--error")).toBe(true);
      });
    });
    describe("hidden <input />", () => {
      it("should render correctly", () => {
        // then
        expect(wrapper.find("input").prop("value")).toEqual(undefined);
      });
    });
  });
  describe("change event", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof Radio>(<Radio {...props} />);
    });
    it("should handle change", () => {
      // given
      // when
      wrapper.find("input").simulate("change", { target: { checked: true } });
      wrapper.find("input").simulate("change", { target: { checked: false } });
      // then
      expect(props.onChange).toHaveBeenCalledTimes(2);
    });
  });
});
