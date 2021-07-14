import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { InputBaseSize } from "../../atoms/input-base";

import InputFieldBase from "./input-field-base";
import { InputFieldType } from "./input-field-base.d";

describe("<InputFieldBase />", () => {
  let wrapper: ReactWrapper<typeof InputFieldBase>;
  const type: InputFieldType = "text";
  const size: InputBaseSize = "md";
  const caption = "test caption";
  const props = {
    id: "test-number-field-id",
    label: "test number field label",
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
  describe("<InputFieldBase /> with initial value and caption", () => {
    const initialValue = "initial value";
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof InputFieldBase>(<InputFieldBase {...props} value={initialValue} caption={caption} />);
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
        expect(labelElement.exists()).toBe(true);
        expect(labelElement.prop("htmlFor")).toEqual(props.id);
        expect(labelElement.prop("children")).toEqual(props.label);
      });
    });
    describe("<InputBase />", () => {
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
    describe("<FieldCaption />", () => {
      it("should render correctly", () => {
        // when
        const spanElement = wrapper.find("span");
        // then
        expect(spanElement.exists()).toBe(true);
        expect(spanElement.prop("children")).toEqual(caption);
      });
    });
  });
  describe("<InputFieldBase /> without initial value or caption", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof InputFieldBase>(<InputFieldBase {...props} />);
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
        expect(inputElement.exists()).toBe(true);
        expect(inputElement.prop("value")).toEqual("");
        expect(inputElement.hasClass(`filled`)).toBe(false);
      });
    });
    describe("<FieldCaption />", () => {
      it("shouldn't render", () => {
        // when
        const spanElement = wrapper.find("span");
        // then
        expect(spanElement.exists()).toBe(false);
      });
    });
  });
  describe("<InputFieldBase /> with error", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof InputFieldBase>(<InputFieldBase {...props} status={"error"} caption={caption} />);
    });
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
    describe("<InputBase />", () => {
      it("should have error class", () => {
        // when
        const inputElement = wrapper.find("input");
        // then
        expect(inputElement.exists()).toBe(true);
        expect(inputElement.hasClass("error")).toBe(true);
      });
    });
    describe("<FieldCaption />", () => {
      it("should render correctly", () => {
        // when
        const spanElement = wrapper.find("span");
        // then
        expect(spanElement.exists()).toBe(true);
        expect(spanElement.hasClass(/\W*(error)\W*/)).toBe(true);
        expect(spanElement.prop("children")).toEqual(caption);
      });
    });
  });
  describe("<InputFieldBase /> change event", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      // given
      wrapper = mount<typeof InputFieldBase>(<InputFieldBase {...props} />);
    });
    it("should handle change", () => {
      // given
      const mockChangeEvent = { target: { value: "test" } };
      // when
      wrapper.find("input").simulate("change", mockChangeEvent);
      // then
      expect(props.validateInputValue).toHaveBeenCalled();
      expect(props.onChange).toHaveBeenCalled();
    });
  });
});
