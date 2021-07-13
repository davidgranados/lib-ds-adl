import React from "react";
import { mount, ReactWrapper } from "enzyme";
import NumberField from "./number-field";

describe("<NumberField />", () => {
  let wrapper: ReactWrapper<typeof NumberField>;
  const props = {
    id: "test-number-field-id",
    label: "test number field label",
    maxLength: 10,
    caption: "test caption",
    placeholder: "test placeholder",
    size: "md",
    onFocus: jest.fn(),
    onBlur: jest.fn(),
    onChange: jest.fn(),
    onInput: jest.fn(),
  };
  describe("<NumberField /> with initial value", () => {
    const initialValue = 123;
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof NumberField>(<NumberField {...props} value={initialValue} />);
    });
    it("should match snapshot", () => {
      // then
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
        expect(inputElement.prop("value")).toEqual(initialValue);
        expect(inputElement.prop("type")).toEqual("tel");
        expect(inputElement.prop("placeholder")).toEqual(props.placeholder);
        expect(inputElement.hasClass(`size-${props.size}`)).toBe(true);
        expect(inputElement.hasClass(`filled`)).toBe(true);
      });
    });
  });
  describe("<NumberField /> with empty value", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof NumberField>(<NumberField {...props} />);
    });
    it("should match snapshot", () => {
      // then
      expect(wrapper).toMatchSnapshot();
    });
    describe("<InputBase />", () => {
      it("should render correctly", () => {
        // when
        const inputElement = wrapper.find("input");
        // then
        expect(inputElement.prop("value")).toEqual("");
      });
    });
  });
  describe("<NumberField /> with error caption", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof NumberField>(<NumberField {...props} status={"error"} />);
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
  describe("<NumberField /> change event", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof NumberField>(<NumberField {...props} />);
    });
    it("should handle change", () => {
      // when
      wrapper.find("input").simulate("change");
      // then
      expect(props.onChange).toHaveBeenCalled();
    });
    it("should accept numbers", () => {
      // given
      const mockChangeEvent = { target: { value: 456 } };
      // when
      wrapper.find("input").simulate("change", mockChangeEvent);
      // then
      expect(wrapper.find("input").prop("value")).toEqual(mockChangeEvent.target.value);
    });
    it("shouldn't accept letters or special characters", () => {
      // given
      const mockChangeEvent = { target: { value: "test" } };
      // when
      wrapper.find("input").simulate("change", mockChangeEvent);
      // then
      expect(wrapper.find("input").prop("value")).toEqual("");
    });
  });
});
