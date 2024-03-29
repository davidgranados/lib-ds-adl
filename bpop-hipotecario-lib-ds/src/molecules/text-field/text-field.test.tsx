import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { InputTextBaseSize, InputFieldType } from "../../types";

import TextField from "./text-field";

describe("<TextField />", () => {
  let wrapper: ReactWrapper<typeof TextField>;
  const type: InputFieldType = "text";
  const size: InputTextBaseSize = "md";
  const caption = "test caption";
  const props = {
    id: "test-number-field-old-id",
    label: "test number field input-field-label",
    type: type,
    maxLength: 10,
    placeholder: "test placeholder",
    size: size,
    validateInputValue: jest.fn(),
    onFocus: jest.fn(),
    onBlur: jest.fn(),
    onChange: jest.fn(),
    onInput: jest.fn(),
  };
  describe("with initial value and caption", () => {
    const initialValue = "initial value";
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof TextField>(<TextField {...props} value={initialValue} caption={caption} />);
    });
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
    describe("<input-field-label />", () => {
      it("should render correctly", () => {
        // when
        const labelElement = wrapper.find("label");
        // then
        expect(labelElement.exists()).toBe(true);
        expect(labelElement.prop("htmlFor")).toEqual(props.id);
        expect(labelElement.prop("children")).toEqual(props.label);
      });
    });
    describe("<input />", () => {
      it("should render correctly", () => {
        // when
        const inputElement = wrapper.find("input");
        // then
        expect(inputElement.exists()).toBe(true);
        expect(inputElement.prop("id")).toEqual(props.id);
        expect(inputElement.prop("value")).toEqual(initialValue);
        expect(inputElement.prop("type")).toEqual(type);
        expect(inputElement.prop("placeholder")).toEqual(props.placeholder);
        expect(inputElement.hasClass(`size-${props.size}`)).toBe(true);
        expect(inputElement.hasClass(`filled`)).toBe(true);
      });
    });
    describe("caption <span />", () => {
      it("should render correctly", () => {
        // when
        const spanElement = wrapper.find("span");
        // then
        expect(spanElement.exists()).toBe(true);
        expect(spanElement.prop("children")).toEqual(caption);
      });
    });
  });
  describe("without initial value or caption", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof TextField>(<TextField {...props} />);
    });
    it("should match snapshot", () => {
      // then
      expect(wrapper).toMatchSnapshot();
    });
    describe("<input />", () => {
      it("should render correctly", () => {
        // when
        const inputElement = wrapper.find("input");
        // then
        expect(inputElement.exists()).toBe(true);
        expect(inputElement.prop("value")).toEqual("");
        expect(inputElement.hasClass(`filled`)).toBe(false);
      });
    });
    describe("caption <span />", () => {
      it("shouldn't render", () => {
        // when
        const spanElement = wrapper.find("span");
        // then
        expect(spanElement.exists()).toBe(false);
      });
    });
  });
  describe("with error", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof TextField>(<TextField {...props} hasError={true} caption={caption} />);
    });
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
    describe("<input />", () => {
      it("should have error class", () => {
        // when
        const inputElement = wrapper.find("input");
        // then
        expect(inputElement.hasClass("error")).toBe(true);
      });
    });
    describe("caption <span />", () => {
      it("should render correctly", () => {
        // when
        const spanElement = wrapper.find("span");
        // then
        expect(spanElement.exists()).toBe(true);
        expect(spanElement.hasClass("error")).toBe(true);
        expect(spanElement.prop("children")).toEqual(caption);
      });
    });
  });
});
