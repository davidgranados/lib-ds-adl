import React from "react";
import { mount, ReactWrapper } from "enzyme";
import TextField from "./text-field";

describe("<TextField />", () => {
  let wrapper: ReactWrapper<typeof TextField>;
  const props = {
    id: "test-text-field-id",
    label: "test text field label",
    value: "test value",
    caption: "test caption",
    placeholder: "test placeholder",
    size: "md",
    onFocus: jest.fn(),
    onBlur: jest.fn(),
    onChange: jest.fn(),
    onInput: jest.fn(),
  };
  describe("<TextField /> with valid value", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof TextField>(<TextField {...props} />);
    });
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
    describe("<Label />", () => {
      it("should render correctly", () => {
        // when
        const labelElement = wrapper.find("label");
        // then
        expect(labelElement.prop("htmlFor")).toEqual(props.id);
        expect(labelElement.prop("children")).toEqual(props.label);
      });
    });
    describe("<InputBase />", () => {
      it("should render correctly", () => {
        // when
        const inputElement = wrapper.find("input");
        // then
        expect(inputElement.prop("id")).toEqual(props.id);
        expect(inputElement.prop("value")).toEqual(props.value);
        expect(inputElement.prop("type")).toEqual("text");
        expect(inputElement.prop("placeholder")).toEqual(props.placeholder);
        expect(inputElement.hasClass(`size-${props.size}`)).toBe(true);
        expect(inputElement.hasClass(`filled`)).toBe(true);
      });
    });
  });
  describe("<TextField /> with error caption", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof TextField>(<TextField {...props} status={"error"} />);
    });
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
    describe("<InputBase />", () => {
      it("should have error class", () => {
        // when
        const inputElement = wrapper.find("input");
        // then
        expect(inputElement.hasClass("error")).toBe(true);
      });
    });
    describe("<Typography />", () => {
      it("should render correctly", () => {
        // when
        const labelElement = wrapper.find("span");
        // then
        expect(labelElement.prop("children")).toEqual(props.caption);
      });
    });
  });
});
